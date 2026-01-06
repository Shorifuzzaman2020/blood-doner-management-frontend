

import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function ModeratorDashboard() {

  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("moderatorId");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-base-100 lg:flex">

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="btn btn-primary bottom-5 right-5 z-50 lg:hidden"
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full w-64 bg-base-200 p-5 flex flex-col justify-between transform transition-transform duration-300 z-40
        ${open ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
      >

        <div>
          <h2 className="text-xl font-bold mb-6 text-center">Moderator Panel</h2>

          <ul className="menu gap-2 mt-4">
            <li><Link onClick={() => setOpen(false)} to="add-doner">Add Blood Doner</Link></li>
            <li><Link onClick={() => setOpen(false)} to="doners">See Doner List</Link></li>
            <li><Link onClick={() => setOpen(false)} to="profile">My Profile</Link></li>
          </ul>
        </div>

        <button
          onClick={handleLogout}
          className="btn btn-error w-full mt-6"
        >
          Log Out
        </button>
      </div>

      {/* Overlay for Mobile */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-30 lg:hidden"
        />
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 w-full overflow-x-auto">
        <Outlet />
      </div>

    </div>
  );
}
