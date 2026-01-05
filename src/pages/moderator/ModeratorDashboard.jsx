// import { Link, Outlet } from "react-router-dom";

// export default function ModeratorDashboard() {
//   return (
//     <div className="flex min-h-screen">

//       {/* Sidebar */}
//       <div className="w-64 bg-base-200 p-5">
//         <h2 className="text-xl font-bold mb-6 text-center">Moderator Panel</h2>

//         <ul className="menu gap-2">
//           <li><Link to="add-doner">Add Blood Doner</Link></li>
//           <li><Link to="doners">See Doner List</Link></li>
//           <li><Link to="profile">My Profile</Link></li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 p-6 bg-base-100">
//         <Outlet />
//       </div>

//     </div>
//   );
// }


import { Link, Outlet, useNavigate } from "react-router-dom";

export default function ModeratorDashboard() {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all login-related data
    localStorage.removeItem("moderatorId");
    localStorage.removeItem("role");

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-base-200 p-5 flex flex-col justify-between">

        <div>
          <h2 className="text-xl font-bold mb-6 text-center">Moderator Panel</h2>

          <ul className="menu gap-2">
            <li><Link to="add-doner">Add Blood Doner</Link></li>
            <li><Link to="doners">See Doner List</Link></li>
            <li><Link to="profile">My Profile</Link></li>
          </ul>
        </div>

        {/* Logout button */}
        <button
          onClick={handleLogout}
          className="btn btn-error w-full mt-6"
        >
          Log Out
        </button>

      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-base-100">
        <Outlet />
      </div>

    </div>
  );
}
