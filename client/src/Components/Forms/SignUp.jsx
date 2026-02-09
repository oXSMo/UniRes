import { useState } from "react";
import { MdClose } from "react-icons/md";
import Input from "../common/Input";
import { useSignup } from "../../Hooks/useSign";
import { useSignSlice } from "../../Store/signSlice";
import { toast } from "react-toastify";

function SignUp({ setopen, open, setSign }) {
  const { err, loading, signup } = useSignup();
  const { setSignupInfo, signupInfo } = useSignSlice();
  const [credentials, setCredentials] = useState({
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const sign = async (event) => {
    event.preventDefault();
    if (await signup(credentials)) {
      setopen(false);
      toast.success("Signed Up Successfuly");
    }
  };
  console.log(loading);

  return (
    <article className="relative grid max-h-[95vh] overflow-auto">
      <MdClose
        onClick={() => setopen(false)}
        className="absolute right-4 top-4 hover:text-red-600 text-xl cursor-pointer hover:scale-110 duration-200"
      />
      <div className="py-4 text-2xl text-center font-semibold tracking-wide">
        Create New Account
      </div>
      <form onSubmit={sign} className="py-3 px-6 space-y-2 grid">
        <Input
          name="fullName"
          set={setSignupInfo}
          placeholder="Full Name"
          title="Full Name"
          err={err.fullName}
          value={signupInfo.fullName}
        />
        <Input
          name="email"
          set={setSignupInfo}
          placeholder="Email"
          title="Email Address"
          err={err.email}
          value={signupInfo.email}
        />
        <Input
          name="phoneNumber"
          set={setSignupInfo}
          placeholder="Phone Number"
          title="Phone Number"
          value={signupInfo.phoneNumber}
          err={err.phoneNumber}
        />
        <Input
          name="password"
          set={setSignupInfo}
          placeholder="Password"
          type="password"
          title="Password"
          value={signupInfo.password}
          err={err.password}
        />
        <Input
          name="confirmPassword"
          set={setSignupInfo}
          placeholder="Confirm Password"
          type="password"
          title="Confirm Password"
          value={signupInfo.confirmPassword}
          err={err.confirmPassword}
        />
        <button className="bg-primary justify-self-center rounded-md border-primary border cursor-pointer text-white w-10/12 mt-3 h-8 hover:bg-transparent hover:text-primary duration-200">
          {loading ? <div className="loader w-5" /> : "SignUp"}
        </button>
        <h1
          onClick={() => setSign("login")}
          className="text-center text-sm mt-2 opacity-80 cursor-pointer hover:text-primary"
        >
          Already Have An Account ?
        </h1>
      </form>
    </article>
  );
}

export default SignUp;
