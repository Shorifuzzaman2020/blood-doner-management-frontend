import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllDoners() {

  const [doners, setDoners] = useState([]);
  const navigate = useNavigate();

  const fetchDoners = async () => {
    const res = await axios.get("http://localhost:5000/api/admin/doners");
    setDoners(res.data);
  };

  useEffect(() => {
    fetchDoners();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    await axios.delete(`http://localhost:5000/api/admin/doner/${id}`);
    fetchDoners();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Blood Doners</h2>

      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>#</th>
            <th>Doner ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Blood Group</th>
            <th>Total Donations</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {doners.map((doner, index) => (
            <tr key={doner._id}>
              <td>{index + 1}</td>
              <td>{doner.donerId}</td>
              <td>{doner.name}</td>
              <td>{doner.address}</td>
              <td>{doner.phone}</td>
              <td>{doner.bloodGroup}</td>
              <td>{doner.totalDonations || 0}</td>
              <td className="flex gap-2">
                <button
                  className="btn btn-sm btn-info"
                  onClick={() => navigate(`/admin/doner/${doner._id}`)}
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(doner._id)}
                  className="btn btn-sm btn-error"
                >
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
