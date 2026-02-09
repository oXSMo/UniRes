function Header() {
  return (
    <header className="flex justify-between items-center">
      <div>
        <h1 className="text-[32px] font-extrabold tracking-wide text-[#0F172A]">
          Restaurent Management
        </h1>
        <h2 className="text- font-medium text-gray-400 mt-1.5">
          Manage daily menus, meal plans, and cafeteria inventory.
        </h2>
      </div>

      <div>
        <button className="button font-medium shadow-lg shadow-primary/40 text-sm bg-primary text-white rounded-md md:px-4 px-2 py-2.5">
          + <span className="md:inline-block hidden">Add New Student</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
