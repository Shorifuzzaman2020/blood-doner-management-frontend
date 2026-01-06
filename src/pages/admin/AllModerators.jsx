import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllModerators() {

    const [moderators, setModerators] = useState([]);
    const navigate = useNavigate();

    const fetchModerators = async () => {
        const res = await axios.get("https://blood-doner-server.vercel.app/api/admin/moderators");
        setModerators(res.data);
    };

    useEffect(() => {
        fetchModerators();
    }, []);

    const handleDelete = async (id) => {
        if (!confirm("Are you sure?")) return;
        await axios.delete(`https://blood-doner-server.vercel.app/api/admin/moderator/${id}`);
        fetchModerators();
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">All Moderators</h2>

            <table className="table table-zebra w-full">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Moderator ID</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>Blood Group</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {moderators.map((mod, index) => (
                        <tr key={mod._id}>
                            <td>{index + 1}</td>
                            <td>{mod.moderatorId}</td>
                            <td>{mod.name}</td>
                            <td>{mod.address}</td>
                            <td>{mod.phone}</td>
                            <td>{mod.bloodGroup}</td>
                            <td className="flex gap-2">
                                <button
                                    className="btn btn-sm btn-info"
                                    onClick={() => navigate(`/admin/moderator/${mod._id}`)}
                                >
                                    Edit
                                </button>

                                <button onClick={() => handleDelete(mod._id)} className="btn btn-sm btn-error">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
