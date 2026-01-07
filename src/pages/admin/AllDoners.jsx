// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function AllDoners() {

//   const [doners, setDoners] = useState([]);
//   const navigate = useNavigate();

//   const fetchDoners = async () => {
//     const res = await axios.get("https://blood-doner-server.vercel.app/api/admin/doners");
//     setDoners(res.data);
//   };

//   useEffect(() => {
//     fetchDoners();
//   }, []);

//   const handleDelete = async (id) => {
//     if (!confirm("Are you sure?")) return;
//     await axios.delete(`https://blood-doner-server.vercel.app/api/admin/doner/${id}`);
//     fetchDoners();
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">All Blood Doners</h2>

//       <table className="table table-zebra w-full">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Doner ID</th>
//             <th>Name</th>
//             <th>Address</th>
//             <th>Phone</th>
//             <th>Blood Group</th>
//             <th>Last Donation</th>
//             <th>Total Donations</th>
//             <th>Action</th>
//           </tr>
//         </thead>

//         <tbody>
//           {doners.map((doner, index) => (
//             <tr key={doner._id}>
//               <td>{index + 1}</td>
//               <td>{doner.donerId}</td>
//               <td>{doner.name}</td>
//               <td>{doner.address}</td>
//               <td>{doner.phone}</td>
//               <td>{doner.bloodGroup}</td>
//               <td>{doner.lastDonationDate}</td>
//               <td>{doner.totalDonations || 0}</td>
//               <td className="flex gap-2">
//                 <button
//                   className="btn btn-sm btn-info"
//                   onClick={() => navigate(`/admin/doner/${doner._id}`)}
//                 >
//                   Edit
//                 </button>

//                 <button
//                   onClick={() => handleDelete(doner._id)}
//                   className="btn btn-sm btn-error"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>

//       </table>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AllDoners() {

  const [doners, setDoners] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [bloodGroup, setBloodGroup] = useState("");
  const [eligibleOnly, setEligibleOnly] = useState(false);

  const navigate = useNavigate();

  const fetchDoners = async () => {
    const res = await axios.get("https://blood-doner-server.vercel.app/api/admin/doners");
    setDoners(res.data);
    setFiltered(res.data);
  };

  useEffect(() => {
    fetchDoners();
  }, []);

  const isEligible = (lastDonationDate) => {
    if (!lastDonationDate) return true;

    const last = new Date(lastDonationDate);
    const today = new Date();
    const diffMonths =
      (today.getFullYear() - last.getFullYear()) * 12 +
      (today.getMonth() - last.getMonth());

    return diffMonths >= 4;
  };

  const handleSearch = () => {
    let result = [...doners];

    if (bloodGroup) {
      result = result.filter(d => d.bloodGroup === bloodGroup);
    }

    if (eligibleOnly) {
      result = result.filter(d => isEligible(d.lastDonationDate));
    }

    setFiltered(result);
  };

  const handleReset = () => {
    setBloodGroup("");
    setEligibleOnly(false);
    setFiltered(doners);
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure?")) return;
    await axios.delete(`https://blood-doner-server.vercel.app/api/admin/doner/${id}`);
    fetchDoners();
  };

  return (
    <div>

      <h2 className="text-2xl font-bold mb-4">All Blood Doners</h2>

      {/* 🔍 Search Panel */}
      <div className="bg-base-200 p-4 rounded-lg mb-4 flex flex-wrap gap-4">

        <select
          className="select select-bordered"
          value={bloodGroup}
          onChange={(e) => setBloodGroup(e.target.value)}
        >
          <option value="">All Blood Groups</option>
          {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => (
            <option key={bg} value={bg}>{bg}</option>
          ))}
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            className="checkbox"
            checked={eligibleOnly}
            onChange={(e) => setEligibleOnly(e.target.checked)}
          />
          Last donation &gt; 4 months
        </label>

        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>

        <button className="btn" onClick={handleReset}>
          Reset
        </button>

      </div>

      {/* 📋 Table */}
      <div className="w-full overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>#</th>
              <th>Doner ID</th>
              <th>Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Blood Group</th>
              <th>Last Donation</th>
              <th>Total Donations</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((doner, index) => (
              <tr key={doner._id}>
                <td>{index + 1}</td>
                <td>{doner.donerId}</td>
                <td>{doner.name}</td>
                <td>{doner.address}</td>
                <td>{doner.phone}</td>
                <td>{doner.bloodGroup}</td>
                <td>{doner.lastDonationDate?.slice(0, 10)}</td>
                <td>{doner.totalDonations || 0}</td>
                <td className="flex gap-2">
                  <button
                    className="btn btn-sm btn-info"
                    // onClick={() => navigate(`/admin/doner/${doner._id}`)}
                    onClick={() => {
                      const role = localStorage.getItem("role");

                      if (role === "admin") {
                        navigate(`/admin/doner/${doner._id}`);
                      } else if (role === "moderator") {
                        navigate(`/moderator/doner/${doner._id}`);
                      }
                    }}


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

    </div>
  );
}
