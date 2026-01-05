

// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {

//     const [role, setRole] = useState("admin");
//     const [email, setEmail] = useState("");
//     const [moderatorId, setModeratorId] = useState("");
//     const [password, setPassword] = useState("");

//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         try {
//             const res = await axios.post("http://localhost:5000/api/auth/login", {
//                 role,
//                 email,
//                 moderatorId,
//                 password
//             });

//             alert(res.data.message);

//             // 🔐 Role based redirect
//             if (res.data.role === "admin") {
//                 navigate("/admin");
//             } else if (res.data.role === "moderator") {
//                 navigate("/moderator");
//             }
//             if (res.data.role === "moderator") {
//                 localStorage.setItem("moderatorId", moderatorId);
//                 navigate("/moderator");
//             }


//         } catch (err) {
//             alert(err.response?.data?.message || "Login failed");
//         }
//     };

//     return (
//         <div className="min-h-screen flex justify-center items-center bg-base-200">
//             <div className="card w-96 bg-base-100 shadow-xl p-6">

//                 <h2 className="text-2xl font-bold text-center">Login</h2>

//                 <select
//                     className="select select-bordered mt-4"
//                     value={role}
//                     onChange={(e) => setRole(e.target.value)}
//                 >
//                     <option value="admin">Admin</option>
//                     <option value="moderator">Moderator</option>
//                 </select>

//                 {role === "admin" ? (
//                     <input
//                         type="email"
//                         placeholder="Admin Email"
//                         className="input input-bordered mt-3"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 ) : (
//                     <input
//                         type="text"
//                         placeholder="Moderator ID"
//                         className="input input-bordered mt-3"
//                         value={moderatorId}
//                         onChange={(e) => setModeratorId(e.target.value)}
//                     />
//                 )}

//                 <input
//                     type="password"
//                     placeholder="Password"
//                     className="input input-bordered mt-3"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />

//                 <button className="btn btn-primary mt-4" onClick={handleLogin}>
//                     Login
//                 </button>

//             </div>
//         </div>
//     );
// }


import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [moderatorId, setModeratorId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        role,
        email,
        moderatorId,
        password
      });

      const userRole = res.data.role;

      alert(res.data.message);

      // Save login session
      localStorage.setItem("role", userRole);

      if (userRole === "moderator") {
        localStorage.setItem("moderatorId", moderatorId);
        navigate("/moderator");
      }

      if (userRole === "admin") {
        navigate("/admin");
      }

    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl p-6">

        <h2 className="text-2xl font-bold text-center">Login</h2>

        <select
          className="select select-bordered mt-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="admin">Admin</option>
          <option value="moderator">Moderator</option>
        </select>

        {role === "admin" ? (
          <input
            type="email"
            placeholder="Admin Email"
            className="input input-bordered mt-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        ) : (
          <input
            type="text"
            placeholder="Moderator ID"
            className="input input-bordered mt-3"
            value={moderatorId}
            onChange={(e) => setModeratorId(e.target.value)}
          />
        )}

        <input
          type="password"
          placeholder="Password"
          className="input input-bordered mt-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn btn-primary mt-4 w-full" onClick={handleLogin}>
          Login
        </button>

      </div>
    </div>
  );
}
