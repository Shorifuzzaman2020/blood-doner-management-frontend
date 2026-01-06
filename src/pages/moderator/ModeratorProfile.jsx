import { useEffect, useState } from "react";
import axios from "axios";

export default function ModeratorProfile() {

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // For now we’ll store moderatorId in localStorage after login (next step)
  const moderatorId = localStorage.getItem("moderatorId");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await axios.get(`https://blood-doner-server.vercel.app/api/moderator/profile/${moderatorId}`);
      setProfile(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  if (loading) return <p className="text-center">Loading profile...</p>;
  if (!profile) return <p className="text-center text-error">Profile not found</p>;

  return (
    <div className="max-w-3xl mx-auto bg-base-100 p-8 shadow-xl rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-center">My Profile</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        <ProfileField title="Moderator ID" value={profile.moderatorId} />
        <ProfileField title="Full Name" value={profile.name} />
        <ProfileField title="Email" value={profile.email} />
        <ProfileField title="Phone" value={profile.phone} />
        <ProfileField title="Address" value={profile.address} />
        <ProfileField title="Profession" value={profile.profession} />
        <ProfileField title="Blood Group" value={profile.bloodGroup} />
        <ProfileField title="Date of Birth" value={profile.dateOfBirth?.slice(0,10)} />
        <ProfileField title="Last Donation Date" value={profile.lastDonationDate?.slice(0,10)} />

      </div>
    </div>
  );
}

function ProfileField({ title, value }) {
  return (
    <div className="bg-base-200 p-4 rounded-lg">
      <p className="text-sm opacity-70">{title}</p>
      <p className="font-semibold">{value || "N/A"}</p>
    </div>
  );
}
