import { Link, Outlet, useNavigate } from "react-router-dom";

export default function AdminDashboard() {
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
            <div className="w-64 bg-base-200 p-5 flex flex-col justify-between">

                {/* Sidebar */}
                <div>
                    <h2 className="text-xl font-bold mb-6 text-center">Admin Panel</h2>

                    <ul className="menu gap-2">
                        <li><Link to="add-moderator">Add Moderator</Link></li>
                        <li><Link to="moderators">See All Moderators</Link></li>
                        <li><Link to="add-donor">Add Blood Doner</Link></li>
                        <li><Link to="doners">See Doner List</Link></li>
                    </ul>
                </div>
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
