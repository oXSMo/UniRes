import axios from "axios";
import { api } from "./api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

////! CREATE USER !////
export const useCreateUser = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState({
    email: "",
    password: "",
    room: "",
    phoneNumber: "",
    fullName: "",
    role: "",
  });

  const createUser = async (credentials) => {
    setLoading(true);
    try {
      if (handleCreateUser({ ...credentials, setErr })) return;
      const resp = await api.post("/api/dashboard/createUser", credentials);
      toast.success("User Created Successfully");
      setErr({
        email: "",
        password: "",
        room: "",
        phoneNumber: "",
        fullName: "",
        role: "",
      });
      if (resp) return true;
    } catch (error) {
      if (error?.response?.data?.error == "Email Already Exist")
        setErr({
          password: "",
          room: "",
          phoneNumber: "",
          fullName: "",
          role: "",
          email: "Email Already Exist",
        });
      else {
        toast;
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, err, createUser };
};

const handleCreateUser = ({
  email,
  password,
  room,
  phoneNumber,
  role,
  setErr,
  fullName,
}) => {
  const errors = {};

  // FullName
  if (!fullName) {
    errors.fullName = "Please fill the input with your full name";
  } else if (!/.{4,}/.test(fullName)) {
    errors.fullName = "Please enter a full name";
  }

  // Email
  if (!email) {
    errors.email = "Please fill the input with your email";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email";
  }

  // Password
  if (!password) {
    errors.password = "Please fill the input with password";
  } else if (!/^(?=.*\d).{6,}$/.test(password)) {
    errors.password =
      "Password must be at least 6 characters and contain a number";
  }

  // Phone Number
  if (!phoneNumber) {
    errors.phoneNumber = "Please fill the input with your phone number";
  } else if (!/^(0[567])\d{8}$/.test(phoneNumber)) {
    errors.phoneNumber = "Please enter a valid phone number";
  }

  // Room
  if (!room) {
    errors.room = "Please fill the input with room";
  }

  // Role
  if (!role) {
    errors.role = "Please select a role";
  } else if (!["admin", "student", "chef"].includes(role)) {
    errors.role = "Role must be admin, student, or chef";
  }

  if (Object.keys(errors).length > 0) {
    setErr({ ...errors, err: true });
    return true;
  }

  return false;
};

////! GET ROOMS !////

export const useGetRooms = (wing) => {
  const [loading, setloading] = useState(false);
  const [rooms, setRooms] = useState([]);
  const getRooms = async () => {
    try {
      setloading(true);
      const resp = await api.get(
        `/api/dashboard/getRooms?${wing ? `wing=${wing}` : ""}`,
      );
      if (resp) setRooms(resp.data);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    getRooms();
  }, [wing]);

  return { rooms, loading };
};

////! GET USERS !////

export const useGetUsers = (auto = true) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      setLoading(true);
      const resp = await api.get("/api/dashboard/getUsers");
      setUsers(resp.data);
    } catch (error) {
      console.log(error);

      return false;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (auto) getUsers();
  }, []);
  return { loading, users };
};

////! CREATE ROOM !////

export const useCreateRoom = () => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState({
    number: "",
    wing: "",
    type: "",
    status: "",
  });

  const createRoom = async (credentials) => {
    try {
      if (handleCreateRoom({ ...credentials, setErr })) return;
      setLoading(true);
      const resp = await api.post("/api/dashboard/createRoom", credentials);
      setErr({ number: "", wing: "", type: "", status: "" });
      if (resp.data) return true;
    } catch (error) {
      if (error.response.data.error === "Room Number Already Exist")
        setErr({
          wing: "",
          type: "",
          status: "",
          number: "Room Number Already Exist",
        });
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, err, createRoom };
};

const handleCreateRoom = ({ type, status, wing, number, setErr }) => {
  const errors = {};

  // type
  if (!type) errors.type = "Please select room type";

  // status
  if (!status) errors.status = "Please select room status";

  // Password
  if (!wing) errors.wing = "Please select room wing";

  // number
  if (!number) errors.number = "Please fill the input with valid room number";

  if (Object.keys(errors).length > 0) {
    setErr({ ...errors, err: true });
    return true;
  }
  setErr({ number: "", wing: "", type: "", status: "" });
  return false;
};
