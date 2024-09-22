import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

export default function Layout() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => setOpen(!open);

  return (
    <div className="flex flex-col bg-gray-50 relative min-h-screen">
      <Header toggleDrawer={toggleDrawer} />
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`transition-all duration-300 ${open ? "w-[16em]" : "w-0"}`}
        >
          <Sidebar open={open} />
        </div>

        {/* Main Content */}
        <div
          className={`transition-all duration-300 flex-1 ${
            open ? "ml-[6em]" : "ml-0"
          } p-2`}
        >
          <Outlet className="flex-grow p-2" />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
