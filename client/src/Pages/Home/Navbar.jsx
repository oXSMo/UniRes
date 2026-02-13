import React, { useState } from "react";
import Modal from "../../Components/common/Modal";
import Login from "../../Components/Forms/Login";
import SignUp from "../../Components/Forms/SignUp";

function Navbar({open,setOpen}) {
  const [sign, setSign] = useState("login");
  return (
    <header className="grid grid-cols-2 xl:h-24 h-16 items-center">
      <article className="flex h-full">
        <nav className="relative z-0  px-7   grid place-content-center">
          <div className="bg-primary w-40 absolute h-full" />
          <div className="rounded-[0px_7px_600px_0px] bg-primary absolute right-0 left-full z-0 h-full w-full"></div>
          <h1 className="text-4xl font-bold text-white relative z-10 ">LOGO</h1>
        </nav>
      </article>

      <article className="justify-self-end px-8">
        <button
          onClick={() => setOpen(true)}
          className="md:block hidden rounded-full cursor-pointer border-black border-2 px-8 py-1.5 font-semibold tracking-wide"
        >
          Sign In
        </button>
      </article>
      <Modal
        open={open}
        onClose={setOpen}
        className="max-w-11/12 w-96 bg-white  rounded-md"
      >
        {sign === "login" && (
          <Login open={open} setopen={setOpen} setSign={setSign} />
        )}
        {sign === "signup" && (
          <SignUp open={open} setopen={setOpen} setSign={setSign} />
        )}
      </Modal>
    </header>
  );
}

export default Navbar;
