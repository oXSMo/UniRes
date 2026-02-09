import React from "react";
import Sidebar from "../../Components/layout/Sidebar";
import { Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <main className="grid grid-cols-[auto_1fr] w-full h-svh">
      <Sidebar />
      <Outlet />
    </main>
  );
}

export default Dashboard;
