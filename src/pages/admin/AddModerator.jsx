// import { useState } from "react";
// import axios from "axios";

// export default function AddModerator() {

//   const [form, setForm] = useState({
//     moderatorId: "",
//     name: "",
//     email: "",
//     phone: "",
//     address: "",
//     profession: "",
//     bloodGroup: "",
//     lastDonationDate: "",
//     password: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     try {
//       const res = await axios.post("https://blood-doner-server.vercel.app/api/admin/add-moderator", form);
//       alert(res.data.message);

//       setForm({
//         moderatorId: "",
//         name: "",
//         email: "",
//         phone: "",
//         address: "",
//         profession: "",
//         bloodGroup: "",
//         lastDonationDate: "",
//         password: ""
//       });

//     } catch (err) {
//       alert(err.response.data.message);
//     }
//   };

//   return (
//     <div className="max-w-3xl mx-auto bg-base-100 p-6 shadow-xl rounded-xl">

//       <h2 className="text-2xl font-bold mb-6 text-center">Add Moderator</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

//         <input name="moderatorId" value={form.moderatorId} onChange={handleChange} placeholder="Moderator ID" className="input input-bordered" />
//         <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="input input-bordered" />

//         <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="input input-bordered" />
//         <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone Number" className="input input-bordered" />

//         <input name="address" value={form.address} onChange={handleChange} placeholder="Address" className="input input-bordered" />
//         <input name="profession" value={form.profession} onChange={handleChange} placeholder="Profession" className="input input-bordered" />

//         <input name="bloodGroup" value={form.bloodGroup} onChange={handleChange} placeholder="Blood Group" className="input input-bordered" />
//         <input name="lastDonationDate" value={form.lastDonationDate} onChange={handleChange} type="date" className="input input-bordered" />

//         <input name="password" value={form.password} onChange={handleChange} type="password" placeholder="Password" className="input input-bordered" />
//       </div>

//       <button onClick={handleSubmit} className="btn btn-primary w-full mt-6">
//         Add Moderator
//       </button>
//     </div>
//   );
// }


import { useState } from "react";
import axios from "axios";

export default function AddModerator() {

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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "https://blood-doner-server.vercel.app/api/admin/add-moderator",
                form
            );

            alert(res.data.message);

            setForm({
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

        } catch (err) {
            alert(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-base-100 p-8 shadow-xl rounded-xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Add Moderator</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

                <div>
                    <label className="label">Moderator ID</label>
                    <input name="moderatorId" value={form.moderatorId} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Full Name</label>
                    <input name="name" value={form.name} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Email Address</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} className="input input-bordered w-full" required />
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
                    <input name="profession" value={form.profession} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="label">Blood Group</label>
                    <select name="bloodGroup" value={form.bloodGroup} onChange={handleChange} className="select select-bordered w-full" required>
                        <option value="">Select Blood Group</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
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

                <div className="md:col-span-2">
                    <label className="label">Password</label>
                    <input type="password" name="password" value={form.password} onChange={handleChange} className="input input-bordered w-full" required />
                </div>

                <button type="submit" className="btn btn-primary md:col-span-2 mt-4">
                    Add Moderator
                </button>

            </form>
        </div>
    );
}
