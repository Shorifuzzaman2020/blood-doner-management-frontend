

// import { createBrowserRouter } from "react-router-dom";

// // Layouts
// import MainLayout from "../layout/MainLayout";

// // Public Pages
// import Home from "../pages/Home/Home";
// import Login from "../pages/Auth/Login";

// // Admin Pages
// // import AdminDashboard from "../pages/admin/AdminDashboard";
// import AddModerator from "../pages/admin/AddModerator";
// import AllModerators from "../pages/admin/AllModerators";
// // import AddDonor from "../pages/admin/AddDonor";
// import DonorList from "../pages/admin/AllDoners";
// import AdminDashboard from "../pages/Admin/AdminDashboard";
// import EditModerator from "../pages/admin/EditModerator";
// import AddDoner from "../pages/admin/AddDonor";
// import AllDoners from "../pages/admin/AllDoners";
// import EditDoner from "../pages/admin/EditDoner";
// import ModeratorDashboard from "../pages/moderator/ModeratorDashboard";
// import ModeratorProfile from "../pages/moderator/ModeratorProfile";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "login", element: <Login /> },
//     ],
//   },

//   {
//     path: "/admin",
//     element: <AdminDashboard />,
//     children: [
//       { path: "add-moderator", element: <AddModerator /> },
//       { path: "moderators", element: <AllModerators /> },
//       { path: "add-donor", element: <AddDoner /> },
//       { path: "doners", element: <AllDoners /> },
//       { path: "/admin/moderator/:id", element: <EditModerator /> },
//       { path: "/admin/doner/:id", element: <EditDoner /> }
//     ],
//   },
//   {
//     path: "/moderator",
//     element: <ModeratorDashboard />,
//     children: [
//       { path: "add-doner", element: <AddDoner /> },
//       { path: "doners", element: <AllDoners /> },
//       { path: "profile", element: <ModeratorProfile /> }
//     ]
//   }
// ]);

// export default router;


// import { createBrowserRouter } from "react-router-dom";

// import MainLayout from "../layout/MainLayout";

// // Public
// import Home from "../pages/Home/Home";
// import Login from "../pages/Auth/Login";

// // Admin
// import AdminDashboard from "../pages/admin/AdminDashboard";
// import AddModerator from "../pages/admin/AddModerator";
// import AllModerators from "../pages/admin/AllModerators";
// import AddDoner from "../pages/admin/AddDonor";
// import AllDoners from "../pages/admin/AllDoners";
// import EditModerator from "../pages/admin/EditModerator";
// import EditDoner from "../pages/admin/EditDoner";

// // Moderator
// import ModeratorDashboard from "../pages/moderator/ModeratorDashboard";
// import ModeratorProfile from "../pages/moderator/ModeratorProfile";

// // Protected
// import ProtectedRoute from "./ProtectedRoute";
// import DashboardLayout from "../layout/DashboardLayout";

// const router = createBrowserRouter([

//   // 🌍 Public
//   {
//     path: "/",
//     element: <MainLayout />,
//     children: [
//       { path: "/", element: <DashboardLayout /> },
//       { path: "login", element: <Login /> },
//     ],
//   },

//   // 🛡️ Admin
//   {
//     path: "/admin",
//     element: (
//       <ProtectedRoute role="admin">
//         <AdminDashboard />
//       </ProtectedRoute>
//     ),
//     children: [
//       { path: "add-moderator", element: <AddModerator /> },
//       { path: "moderators", element: <AllModerators /> },
//       { path: "add-donor", element: <AddDoner /> },
//       { path: "doners", element: <AllDoners /> },
//       { path: "moderator/:id", element: <EditModerator /> },
//       { path: "doner/:id", element: <EditDoner /> }
//     ],
//   },

//   // 🛡️ Moderator
//   {
//     path: "/moderator",
//     element: (
//       <ProtectedRoute role="moderator">
//         <ModeratorDashboard />
//       </ProtectedRoute>
//     ),
//     children: [
//       { path: "add-doner", element: <AddDoner /> },
//       { path: "doners", element: <AllDoners /> },
//       { path: "profile", element: <ModeratorProfile /> }
//     ],
//   }

// ]);

// export default router;


import { createBrowserRouter } from "react-router-dom";

// Layouts
import MainLayout from "../layout/MainLayout";
import DashboardLayout from "../layout/DashboardLayout";

// Public
import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";

// Admin
import AdminDashboard from "../pages/admin/AdminDashboard";
import AddModerator from "../pages/admin/AddModerator";
import AllModerators from "../pages/admin/AllModerators";
import AddDoner from "../pages/admin/AddDonor";
import AllDoners from "../pages/admin/AllDoners";
import EditModerator from "../pages/admin/EditModerator";
import EditDoner from "../pages/admin/EditDoner";

// Moderator
import ModeratorDashboard from "../pages/moderator/ModeratorDashboard";
import ModeratorProfile from "../pages/moderator/ModeratorProfile";

// Protected
import ProtectedRoute from "./ProtectedRoute";

const router = createBrowserRouter([

  // 🌍 Public pages
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
    ],
  },

  // 🛡️ Dashboards layout
  {
    path: "/",
    element: <DashboardLayout />,
    children: [

      // Admin
      {
        path: "admin",
        element: (
          <ProtectedRoute role="admin">
            <AdminDashboard />
          </ProtectedRoute>
        ),
        children: [
          { path: "add-moderator", element: <AddModerator /> },
          { path: "moderators", element: <AllModerators /> },
          { path: "add-donor", element: <AddDoner /> },
          { path: "doners", element: <AllDoners /> },
          { path: "moderator/:id", element: <EditModerator /> },
          { path: "doner/:id", element: <EditDoner /> }
        ],
      },

      // Moderator
      {
        path: "moderator",
        element: (
          <ProtectedRoute role="moderator">
            <ModeratorDashboard />
          </ProtectedRoute>
        ),
        children: [
          { path: "add-doner", element: <AddDoner /> },
          { path: "doners", element: <AllDoners /> },
          { path: "profile", element: <ModeratorProfile /> }
        ],
      }
    ],
  }
]);

export default router;
