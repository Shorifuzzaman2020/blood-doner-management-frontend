// import React from "react";
// import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-green-700 text-white py-10">
//       <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Logo & About */}
//         <div>
//           <h2 className="text-xl font-bold text-white mb-3">GlobalScholarHub</h2>
//           <p className="text-sm">
//             Your trusted platform for exploring global scholarships and
//             empowering education.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
//           <ul className="space-y-2 text-sm">
//             <li><a href="/" className="hover:underline">Home</a></li>
//             <li><a href="/scholarships" className="hover:underline">Scholarships</a></li>
//             <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
//             <li><a href="/contact" className="hover:underline">Contact</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
//           <ul className="text-sm space-y-1">
//             <li>Email: support@scholarhub.com</li>
//             <li>Phone: +880-123-456-789</li>
//             <li>Location: Dhaka, Bangladesh</li>
//           </ul>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h3 className="text-lg font-semibold text-white mb-2 text-center">Follow Us</h3>
//           <div className="flex justify-center space-x-6 mt-2 text-2xl">
//             <a href="https://www.facebook.com/md.shorifuzzaman.847390/" className="hover:text-green-300"><FaFacebook /></a>
//             <a href="https://www.instagram.com/m.shorifuzzaman/" className="hover:text-green-300"><FaInstagram /></a>
//             <a href="https://x.com/Shorifuzzaman22" className="hover:text-green-300"><FaTwitter /></a>
//             <a href="https://www.linkedin.com/in/mdshorifuzzaman2020/" className="hover:text-green-300"><FaLinkedin /></a>
//           </div>
//         </div>
//       </div>

//       <div className="text-center text-sm text-green-200 mt-8 border-t border-green-500 pt-4">
//         &copy; {new Date().getFullYear()} ScholarHub. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Logo & About */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">শ্রীবরদী সমাজকল্যাণ ও রক্তদান সংস্থা</h2>
          <p className="text-sm">
            এটি বাংলাদেশের শেরপুর জেলার শ্রীবরদী থানায় প্রতিষ্ঠিত একটি সমাজ সেবামূলক অরাজনৈতিক স্বেচ্ছাসেবী সংগঠন, যা রক্তদান ও মানবিক সহায়তা কার্যক্রমে নিয়োজিত।
          </p>
        </div>

        {/* Quick Links */}
        {/* <div>
          <h3 className="text-lg font-semibold text-white mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/admin" className="hover:underline">Admin Dashboard</a></li>
            <li><a href="/moderator" className="hover:underline">Moderator Panel</a></li>
            <li><a href="/login" className="hover:underline">Login</a></li>
          </ul>
        </div> */}

        {/* Contact Info */}
        <div className="mx-auto">
          <h3 className="text-lg font-semibold text-white mb-2 ">Contact</h3>
          <ul className="text-sm space-y-1">
            <li>Email: sreebardisocialwelfare2020@gmail.com</li>
            <li>Phone: 01518905148, 01646918226</li>
            <li>Location: Sherpur, Bangladesh</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="mx-auto">
          <h3 className="text-lg font-semibold text-white mb-2 text-center">Follow Us</h3>
          {/* <div className="space-y-1 text-xl">
            <a href="https://www.facebook.com/md.shorifuzzaman.847390/" className="hover:text-red-300"><FaFacebook /><p>Facebook Page</p></a>
            <a href="https://www.facebook.com/md.shorifuzzaman.847390/" className="hover:text-red-300"><FaFacebook /><p>Facebook Group</p></a>
            <a href="https://www.instagram.com/m.shorifuzzaman/" className="hover:text-red-300"><FaInstagram /></a>
            <a href="https://x.com/Shorifuzzaman22" className="hover:text-red-300"><FaTwitter /></a>
            <a href="https://www.linkedin.com/in/mdshorifuzzaman2020/" className="hover:text-red-300"><FaLinkedin /></a>
          </div> */}
          <div className="space-y-2 text-xl">
            <div>
              <a target="_blank"
                href="https://www.facebook.com/share/18AA5jnxgY/"
                className="flex items-center gap-2 hover:text-red-300"
              >
                <FaFacebook />
                <span>Facebook Page</span>
              </a>
            </div>

            <div>
              <a target="_blank"
                href="https://www.facebook.com/groups/285731446154859/?ref=share&mibextid=NSMWBT"
                className="flex items-center gap-2 hover:text-red-300"
              >
                <FaFacebook />
                <span>Facebook Group</span>
              </a>
            </div>
          </div>

        </div>

      </div>

      <div className="text-center text-sm text-red-200 mt-8 border-t border-red-500 pt-4">
        &copy; {new Date().getFullYear()} শ্রীবরদী সমাজকল্যাণ ও রক্তদান সংস্থা. Saving lives together.
      </div>
    </footer>
  );
};

export default Footer;
