import React, { useState } from "react";
import NewRoom from "./NewRoom";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-[32px] font-extrabold tracking-wide text-[#0F172A]">
          Room Managment
        </h1>
        <h2 className="text- font-medium text-gray-400 mt-1.5">
          Monitor and managment student accomodation across all blocks.
        </h2>
      </div>

      <div>
        <button
          onClick={() => setOpen(true)}
          className="button font-medium shadow-lg shadow-primary/40 text-sm bg-primary text-white rounded-md md:px-4 px-2 py-2.5"
        >
          + <span className="md:inline-block hidden">Add New Room</span>
        </button>
      </div>
      <NewRoom open={open} setOpen={setOpen} />
    </header>
  );
}

export default Header;
