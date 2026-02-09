import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Dashboard from "./Pages/Dashboard/Dashboard";
import DashboardHome from "./Pages/Dashboard/Home/Home";
import Room from "./Pages/Dashboard/Room/Room";
import Students from "./Pages/Dashboard/Students/Students";
import Resturant from "./Pages/Dashboard/Resturant/Resturant";
import Settings from "./Pages/Dashboard/Settings/Settings";
function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="text-[#0F172A]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="rooms" element={<Room />} />
          <Route path="students" element={<Students />} />
          <Route path="restaurant" element={<Resturant />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
