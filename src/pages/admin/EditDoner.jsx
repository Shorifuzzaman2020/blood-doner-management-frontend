import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditDoner() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        donerId: "",
        name: "",
        phone: "",
        address: "",
        profession: "",
        bloodGroup: "",
        lastDonationDate: "",
        dateOfBirth: "",
        totalDonations: 0
    });

    const formatDate = (date) => {
        if (!date) return "";
        return new Date(date).toISOString().split("T")[0];
    };

    useEffect(() => {
        fetchDoner();
    }, []);

    const fetchDoner = async () => {
        const res = await axios.get(`https://blood-doner-server.vercel.app/api/admin/doner/${id}`);
        const data = res.data;
        setForm({
            ...data,
            lastDonationDate: formatDate(data.lastDonationDate),
            dateOfBirth: formatDate(data.dateOfBirth),
            totalDonations: data.totalDonations || 0
        });

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     await axios.put(`https://blood-doner-server.vercel.app/api/admin/doner/${id}`, form);

    //     alert("Doner updated successfully");
    //     navigate("/admin/doners");
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put(
            `https://blood-doner-server.vercel.app/api/admin/doner/${id}`,
            form
        );

        alert("Doner updated successfully");

        const role = localStorage.getItem("role");

        if (role === "admin") {
            navigate("/admin/doners");
        } else if (role === "moderator") {
            navigate("/moderator/doners");
        }
    };


    return (
        <div className="max-w-4xl mx-auto bg-base-100 p-8 shadow-xl rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Edit Blood Doner</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                    <label className="label">Doner ID</label>
                    <input name="donerId" value={form.donerId} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">Address</label>
                    <input name="address" value={form.address} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">Profession</label>
                    <input name="profession" value={form.profession} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">Blood Group</label>
                    <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} className="select select-bordered w-full">
                        {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => (
                            <option key={bg} value={bg}>{bg}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="label">Date of Birth</label>
                    <input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">Last Blood Donation Date</label>
                    <input type="date" name="lastDonationDate" value={form.lastDonationDate} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div className="md:col-span-2 bg-base-200 p-3 rounded-lg">
                    <strong>Total Donations:</strong> {form.totalDonations}
                </div>

                <button className="btn btn-primary md:col-span-2 mt-4">
                    Update Doner
                </button>

            </form>
        </div>
    );
}
