import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditModerator() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    moderatorId: "",
    name: "",
    email: "",
    phone: "",
    address: "",
    profession: "",
    bloodGroup: "",
    lastDonationDate: "",
    dateOfBirth: "",
    password: ""
  });

  useEffect(() => {
    fetchModerator();
  }, []);

  const fetchModerator = async () => {
    const res = await axios.get(`https://blood-doner-server.vercel.app/api/admin/moderator/${id}`);
    setForm(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`https://blood-doner-server.vercel.app/api/admin/moderator/${id}`, form);
    alert("Moderator updated");
    navigate("/admin/moderators");
  };

  return (
    <div className="max-w-4xl mx-auto bg-base-100 p-8 shadow-xl rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">Edit Moderator</h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {/* SAME FORM STRUCTURE AS ADD MODERATOR */}
        {Object.entries(form).map(([key, value]) => (
          <div key={key} className={key === "password" ? "md:col-span-2" : ""}>
            <label className="label">{key.replace(/([A-Z])/g, " $1")}</label>

            {key === "bloodGroup" ? (
              <select name="bloodGroup" value={value} onChange={handleChange} className="select select-bordered w-full">
                <option value="">Select Blood Group</option>
                {["A+","A-","B+","B-","AB+","AB-","O+","O-"].map(bg => (
                  <option key={bg} value={bg}>{bg}</option>
                ))}
              </select>
            ) : key.includes("Date") ? (
              <input type="date" name={key} value={value} onChange={handleChange} className="input input-bordered w-full" />
            ) : (
              <input type={key === "password" ? "password" : "text"} name={key} value={value} onChange={handleChange} className="input input-bordered w-full" />
            )}

          </div>
        ))}

        <button className="btn btn-primary md:col-span-2 mt-4">Update Moderator</button>
      </form>
    </div>
  );
}
