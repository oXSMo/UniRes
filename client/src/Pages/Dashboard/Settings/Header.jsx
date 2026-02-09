import { FaSave } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-[32px] font-extrabold tracking-wide text-[#0F172A]">
          Settings
        </h1>
        <h2 className="text- font-medium text-gray-400 mt-1.5">
          Manage your university residence configirations and administrative
          staff.
        </h2>
      </div>

      <div>
        <button className="button flex justify-center items-center gap-2 font-medium shadow-lg shadow-primary/40 text-sm bg-primary text-white rounded-md md:px-4 px-2 py-2.5">
          <FaSave />{" "}
          <span className="md:inline-block hidden">Save Changes</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
