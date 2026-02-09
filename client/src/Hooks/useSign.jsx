import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  authSlice,
  clientSlice,
  profileSlice,
  useSignSlice,
} from "../Store/signSlice";
import { api } from "./api";

//////!   LOGIN   !//////

export const useLogin = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState({ email: "", password: "", err: false });
  const navigate = useNavigate();
  const { setAuth } = authSlice();
  const {
    loginInfo: { email, password },
  } = useSignSlice();

  const login = async () => {
    if (
      !email ||
      !password ||
      !/^(?=.*\d).{6,}$/.test(password) ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      seterr({
        password: !password
          ? "Please fill the input with your password"
          : /^(?=.*\d).{6,}$/.test(password)
            ? ""
            : "Please Enter Valid Password",
        email: !email
          ? "Please fill the input with your email"
          : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
            ? ""
            : "Please Enter Valid Email",
        err: true,
      });
      return;
    }

    setloading(true);

    try {
      // Note: Replaced axios with api to ensure base URL/interceptors are used
      const resp = await api.post("/api/auth/login", { email, password });
      seterr({ email: "", password: "", err: false }); // Fixed: set err to false on success
      setAuth(resp.data._id);
      return true;
    } catch (error) {
      if (error.response?.status === 402 || error.response?.status === 403)
        seterr({
          password: error.response.status === 402 ? "Incorrect Password" : "",
          email: error.response.status === 403 ? "Email Not Found" : "",
          err: true,
        });
    } finally {
      setloading(false);
    }
  };

  return { login, loading, err };
};

//////!   SIGNUP   !//////

export const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState({
    email: "",
    password: "",
    fullName: "",
    confirmPassword: "",
    phoneNumber: "",
    err: false,
  });
  const navigate = useNavigate();
  const { setAuth } = authSlice();
  const { signupInfo: props } = useSignSlice();

  const signup = async () => {
    if (handleSignup({ ...props, setErr })) return;
    setLoading(true);
    try {
      const resp = await api.post("/api/auth/signup", props);
      setErr({
        email: "",
        password: "",
        fullName: "",
        confirmPassword: "",
        phoneNumber: "",
        err: false,
      });
      setAuth(resp.data._id);
      navigate("/");
      return true;
    } catch (error) {
      if (error.response?.status === 402)
        setErr((prev) => ({
          ...prev,
          email: "Email Already Exist",
          err: true,
        }));
      if (error.response?.status === 403)
        setErr((prev) => ({
          ...prev,
          fullName: "Full name Already Exist",
          err: true,
        }));
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup, err };
};

const handleSignup = ({
  email,
  password,
  confirmPassword,
  fullName,
  phoneNumber,
  setErr,
}) => {
  if (
    !email ||
    !password ||
    !fullName ||
    !confirmPassword ||
    !phoneNumber ||
    !/.{3,}/.test(fullName) ||
    !/^(0[567])\d{8}$/.test(phoneNumber) ||
    !/^(?=.*\d).{6,}$/.test(password) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    password !== confirmPassword
  ) {
    setErr(() => ({
      password: !password
        ? "Please fill the input with new password"
        : /^(?=.*\d).{6,}$/.test(password)
          ? ""
          : "Please Enter Valid Password",
      email: !email
        ? "Please fill the input with your email"
        : /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          ? ""
          : "Please Enter Valid Email",
      phoneNumber: !phoneNumber
        ? "Please fill the input with your phone number"
        : /^(0[567])\d{8}$/.test(phoneNumber)
          ? ""
          : "Please Enter Valid Phone Number",
      fullName: !fullName
        ? "Please fill the input with your full name"
        : /.{3,}/.test(fullName)
          ? ""
          : "Please Enter Valid full name",
      confirmPassword: !confirmPassword
        ? "Please fill the input with same password"
        : confirmPassword !== password
          ? "Please Enter The Same Password"
          : "",
      err: true,
    }));
    return true;
  }
  return false;
};

//////!   LOGOUT   !//////

export const useLogout = () => {
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState("");
  const { setAuth } = authSlice();
  const navigate = useNavigate();

  const logout = async () => {
    setloading(true);
    try {
      const resp = await api.get("/api/auth/logout");
      if (resp.data) {
        setAuth("");
        navigate("/");
        localStorage.clear();
      }
    } catch (error) {
      if (error.response?.status === 401) seterr("Not Authorized");
      console.log({ error });
    } finally {
      setloading(false);
    }
  };
  return { loading, err, logout };
};

//////!   GET PROFILE   !//////

export const useGetProfile = (onMount = true) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const { setProfile } = profileSlice();

  const Get = async () => {
    try {
      setLoading(true);
      const resp = await api.get("/api/auth/myProfile");
      setProfile(resp.data);
    } catch (error) {
      setErr(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (onMount) Get();
  }, []);

  return { loading, err, Get };
};

//////!   UPDATE PROFILE   !//////

export const useUpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [err, setErr] = useState({
    email: "",
    fullName: "",
    phoneNumber: "",
    err: "",
  });
  const { setProfile } = profileSlice();

  const update = async (info) => {
    try {
      setSuccess(false);
      if (handleUpdateError(setErr, info)) return;

      setLoading(true);
      const resp = await api.put("/api/auth/MyProfile", {
        email: info.email,
        fullName: info.fullName,
        phoneNumber: info.phoneNumber,
      });
      setProfile(resp.data);
      setErr({
        email: "",
        fullName: "",
        phoneNumber: "",
        err: "",
      });
      setSuccess(true);
    } catch (error) {
      const serverErr = error.response?.data;
      setErr({
        email:
          serverErr?.error === "Email Already Exist"
            ? "Email Already Exist"
            : "",
        fullName: "",
        phoneNumber: "",
        err: "Something Went Wrong",
      });
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return { update, loading, err, success };
};

const handleUpdateError = (setErr, { fullName, phoneNumber, email }) => {
  if (
    (fullName?.length < 3 && Boolean(fullName)) ||
    (Boolean(phoneNumber) && !/^(0[567])\d{8}$/.test(phoneNumber)) ||
    (Boolean(email) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
  ) {
    setErr({
      fullName:
        fullName?.length < 3 && Boolean(fullName)
          ? "Please Enter Valid Full Name"
          : "",
      phoneNumber:
        Boolean(phoneNumber) && !/^(0[567])\d{8}$/.test(phoneNumber)
          ? "Please Enter Valid Phone Number"
          : "",
      email:
        Boolean(email) && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          ? "Please Enter Valid Email"
          : "",
    });

    return true;
  }
  return false;
};

//////!   GET CLIENT PROFILE   !//////

export const useGetClient = (_id, OnMount = true) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const { setClient, client } = clientSlice();

  const getClient = async () => {
    try {
      if (!_id) return;
      setLoading(true);
      const resp = await api.get(`/api/auth/getProfile/${_id}`);
      setClient(resp.data);
      setErr(false);
    } catch (error) {
      setErr(true);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (OnMount) getClient();
  }, [_id]);

  return { loading, err, client, getClient };
};
