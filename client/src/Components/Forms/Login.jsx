import { MdClose } from "react-icons/md";
import Input from "../common/Input";
import { useState } from "react";
import { useSignSlice } from "../../Store/signSlice";
import { useLogin } from "../../Hooks/useSign";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login({ setopen, open, setSign }) {
  const { err, loading, login } = useLogin();
  const { setLoginupInfo, loginInfo } = useSignSlice();
  const navigate = useNavigate();
  const LOGIN = async (e) => {
    e.preventDefault();
    if (await login()) {
      setopen(false);
      toast.success("Signed Up Successfuly");
      navigate("/dashboard");
    }
  };
  return (
    <article className="relative grid ">
      <MdClose
        onClick={() => setopen(false)}
        className="absolute right-4 top-4 hover:text-red-600 text-xl cursor-pointer hover:scale-110 duration-200"
      />
      <div className="py-4 text-2xl text-center font-semibold tracking-wide">
        Welcome Back
      </div>
      <form onSubmit={LOGIN} className="py-3 px-6 space-y-2 grid">
        <Input
          name="email"
          set={setLoginupInfo}
          placeholder="Email"
          title="Email Address"
          err={err.email}
          value={loginInfo.email}
        />
        <Input
          name="password"
          set={setLoginupInfo}
          placeholder="Password"
          type="password"
          err={err.password}
          value={loginInfo.password}
          title="Password"
        />
        <button
          disabled={loading}
          className="bg-primary button justify-self-center rounded-md border-primary border cursor-pointer text-white w-10/12 mt-3 h-8 hover:bg-transparent hover:text-primary duration-200"
        >
          {loading ? (
            <div className="loader w-4 aspect-square mx-auto" />
          ) : (
            "Login"
          )}
        </button>
      </form>
    </article>
  );
}

export default Login;
