import { useState } from "react";
import axios from "axios";

export default function AddDoner() {

    const [form, setForm] = useState({
        donerId: "",
        name: "",
        phone: "",
        address: "",
        profession: "",
        bloodGroup: "",
        lastDonationDate: "",
        dateOfBirth: ""
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "http://localhost:5000/api/admin/add-doner",
                form
            );

            alert(res.data.message);

            setForm({
                donerId: "",
                name: "",
                phone: "",
                address: "",
                profession: "",
                bloodGroup: "",
                lastDonationDate: "",
                dateOfBirth: ""
            });

        } catch (err) {
            alert(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-base-100 p-8 shadow-xl rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Add Blood Doner</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                    <label className="label">Doner ID</label>
                    <input name="donerId" value={form.donerId} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Phone Number</label>
                    <input name="phone" value={form.phone} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Address</label>
                    <input name="address" value={form.address} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Profession</label>
                    <input name="profession" value={form.profession} onChange={handleChange} className="input input-bordered w-full" />
                </div>

                <div>
                    <label className="label">Blood Group</label>
                    <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} className="select select-bordered w-full" required>
                        <option value="">Select Blood Group</option>
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

                <button className="btn btn-primary md:col-span-2 mt-4">
                    Add Blood Doner
                </button>

            </form>
        </div>
    );
}
