import { useState } from "react";
import Input from "../../../Components/common/Input";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosNotifications, IoMdSettings } from "react-icons/io";
import NewUser from "./NewUser";

function Header() {
  const [credentials, setCredentials] = useState({ search: "" });
  const [open, setOpen] = useState(false);
  return (
    <header className="flex sticky top-0 items-center justify-between px-4 py-1 border-b border-gray-300 shadow-lg shadow-black/30 bg-[#F8FAFC] z-40">
      <aside className="flex gap-6 items-center">
        <h1 className="text-lg font-bold tracking-wide">Dashboard Overview</h1>
        <div className="md:block hidden">
          <Input
            name="search"
            set={setCredentials}
            value={credentials.search}
            placeholder="Search Students,rooms"
            icon={
              <div>
                <IoSearchSharp className="scale-125 opacity-40!" />
              </div>
            }
          />
        </div>
      </aside>

      <aside className="flex items-center gap-6 text-[26px] text-gray-500">
        <div className="relative button">
          <IoIosNotifications />{" "}
          <div className="absolute  border-white border w-1.5 rounded-full aspect-square bg-red-600 top-0 right-0 -translate-x-1 translate-y-0.5" />
        </div>

        <IoMdSettings className="button" />

        <button
          onClick={() => setOpen(true)}
          className="button bg-primary text-white text-sm font-medium   px-4 py-1.5 rounded-md"
        >
          + New Entry
        </button>
      </aside>
      <NewUser open={open} setopen={setOpen} />
    </header>
  );
}

export default Header;
