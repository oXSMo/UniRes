import LOGO from "../../Assets/LOGO.png";
import {
  MdDashboard,
  MdDoorFront,
  MdPeopleAlt,
  MdPayments,
  MdSettings,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <main className="w-64 border-r bg-[#F8FAFC] border-gray-300  shadow-lg shadow-black/40 grid grid-rows-[auto_1fr]">
      <section className="sticky top-0">
        <aside className="py-3.5 px-2 pl-4">
          <img src={LOGO} className="w-3/4" />
        </aside>

        <aside className="py-1 px-6 space-y-1.5">
          <NAV icon={<MdDashboard />} to="/dashboard" title="Dashbaord" />
          <NAV icon={<MdDoorFront />} to="/dashboard/rooms" title="Rooms" />
          <NAV
            icon={<MdPeopleAlt />}
            to="/dashboard/students"
            title="Students"
          />
          <NAV
            icon={<MdPayments />}
            to="/dashboard/restaurant"
            title="Restaurant"
          />
          <NAV
            icon={<MdSettings />}
            to="/dashboard/settings"
            title="Settings"
          />
        </aside>
      </section>
    </main>
  );
}

const NAV = ({ icon, title, to }) => {
  return (
    <NavLink
      end
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-2 p-2 rounded-lg transition-colors font-medium tracking-wide ${
          isActive ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-100"
        }`
      }
    >
      {icon}
      {title}
    </NavLink>
  );
};

export default Sidebar;
