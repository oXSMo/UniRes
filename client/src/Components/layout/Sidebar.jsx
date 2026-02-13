import { useEffect, useState } from "react";
import LOGO from "../../Assets/LOGO.png";
import {
  MdDashboard,
  MdDoorFront,
  MdPeopleAlt,
  MdPayments,
  MdSettings,
  MdMenu,
} from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { useClickOut, useScreenWidth } from "../../Utils/Hooks";
import { sidebarSlice } from "../../Store/dashboard";

function Sidebar() {
  const { pathname } = useLocation();
  const [open, setopen] = useState(true);
  const { show, setshow } = sidebarSlice();
  const ref = useClickOut(() => {
    setshow(false);
  });
  const width = useScreenWidth();

  useEffect(() => {
    if (width > 768) {
      setshow(true);
    }
  }, [width]);

  useEffect(() => {
    setshow(false);
  }, [pathname]);

  console.log({ screen: width < 768, show, all: width > 768 && show, width });

  return (
    <>
      <button
        onClick={() => setshow(!show)}
        className="fixed bottom-6 left-6 card rounded-full z-40 bg-white p-3! shadow-lg shadow-black button"
      >
        <MdMenu />
      </button>

      <main
        ref={ref}
        className={`w-64 border-r bg-[#F8FAFC] border-gray-300  shadow-lg shadow-black/40 grid grid-rows-[auto_1fr] md:static fixed left-0 h-screen  z-50  duration-300 
    ${width > 768 ? "translate-x-0" : show ? "translate-x-0" : "-translate-x-full"}
    `}
      >
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
    </>
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
