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
                "https://blood-doner-server.vercel.app/api/admin/add-doner",
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
        <div className="px-3 sm:px-6 lg:px-0 py-6">
            <div className="max-w-4xl mx-auto bg-base-100 p-6 sm:p-8 shadow-xl rounded-xl">

                <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
                    Add Blood Doner
                </h2>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"
                >

                    {/* Doner ID */}
                    <div>
                        <label className="label text-sm font-semibold">Doner ID</label>
                        <input
                            name="donerId"
                            value={form.donerId}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Name */}
                    <div>
                        <label className="label text-sm font-semibold">Full Name</label>
                        <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="label text-sm font-semibold">Phone Number</label>
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="label text-sm font-semibold">Address</label>
                        <input
                            name="address"
                            value={form.address}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    {/* Profession */}
                    <div>
                        <label className="label text-sm font-semibold">Profession</label>
                        <input
                            name="profession"
                            value={form.profession}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Blood Group */}
                    <div>
                        <label className="label text-sm font-semibold">Blood Group</label>
                        <select
                            name="bloodGroup"
                            value={form.bloodGroup}
                            onChange={handleChange}
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select Blood Group</option>
                            {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => (
                                <option key={bg} value={bg}>{bg}</option>
                            ))}
                        </select>
                    </div>

                    {/* DOB */}
                    <div>
                        <label className="label text-sm font-semibold">Date of Birth</label>
                        <input
                            type="date"
                            name="dateOfBirth"
                            value={form.dateOfBirth}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Last Donation */}
                    <div>
                        <label className="label text-sm font-semibold">Last Blood Donation Date</label>
                        <input
                            type="date"
                            name="lastDonationDate"
                            value={form.lastDonationDate}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        className="btn btn-primary col-span-1 sm:col-span-2 mt-3"
                    >
                        Add Blood Doner
                    </button>

                </form>
            </div>
        </div>
    );

    // return (
    //     <div className="max-w-4xl mx-auto bg-base-100 p-8 shadow-xl rounded-xl">
    //         <h2 className="text-3xl font-bold mb-6 text-center">Add Blood Doner</h2>

    //         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

    //             <div>
    //                 <label className="label">Doner ID</label>
    //                 <input name="donerId" value={form.donerId} onChange={handleChange} className="input input-bordered w-full" required />
    //             </div>

    //             <div>
    //                 <label className="label">Full Name</label>
    //                 <input name="name" value={form.name} onChange={handleChange} className="input input-bordered w-full" required />
    //             </div>

    //             <div>
    //                 <label className="label">Phone Number</label>
    //                 <input name="phone" value={form.phone} onChange={handleChange} className="input input-bordered w-full" required />
    //             </div>

    //             <div>
    //                 <label className="label">Address</label>
    //                 <input name="address" value={form.address} onChange={handleChange} className="input input-bordered w-full" required />
    //             </div>

    //             <div>
    //                 <label className="label">Profession</label>
    //                 <input name="profession" value={form.profession} onChange={handleChange} className="input input-bordered w-full" />
    //             </div>

    //             <div>
    //                 <label className="label">Blood Group</label>
    //                 <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} className="select select-bordered w-full" required>
    //                     <option value="">Select Blood Group</option>
    //                     {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(bg => (
    //                         <option key={bg} value={bg}>{bg}</option>
    //                     ))}
    //                 </select>
    //             </div>

    //             <div>
    //                 <label className="label">Date of Birth</label>
    //                 <input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} className="input input-bordered w-full" />
    //             </div>

    //             <div>
    //                 <label className="label">Last Blood Donation Date</label>
    //                 <input type="date" name="lastDonationDate" value={form.lastDonationDate} onChange={handleChange} className="input input-bordered w-full" />
    //             </div>

    //             <button className="btn btn-primary md:col-span-2 mt-4">
    //                 Add Blood Doner
    //             </button>

    //         </form>
    //     </div>
    // );
}
