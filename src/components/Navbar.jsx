
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-md px-3 lg:px-6 fixed top-0 left-0 w-full z-50">

      {/* LEFT */}
      <div className="navbar-start flex items-center gap-2">

        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10"
          >
            <li><Link to="/">Home</Link></li>
            {/* <li><Link to="/doners">Donor List</Link></li> */}
            <li><Link to="/activity">Our Activity</Link></li>
            {/* <li><Link to="/beAdonor">Be a Donor</Link></li> */}
          </ul>
        </div>

        {/* Logo */}
        <img
          src="https://i.ibb.co.com/MxTVy0cJ/273980872-1550789058647411-6797711509175348982-n.jpg"
          className="h-12 w-12 rounded-full"
          alt="Logo"
        />

        {/* Title */}
        <h1 className="text-xs lg:text-2xl lg:font-bold text-black sm:block">
          শ্রীবরদী সমাজকল্যাণ ও রক্তদান সংস্থা
        </h1>
      </div>

      {/* CENTER MENU (Desktop) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2">
          <li><Link to="/">Home</Link></li>
          {/* <li><Link to="/doners">Donor List</Link></li> */}
          <li><Link to="/activity">Our Activity</Link></li>
          {/* <li><Link to="/beAdonor">Be a Donor</Link></li> */}
        </ul>
      </div>

      {/* RIGHT */}
      <div className="navbar-end">
        <Link to="/login" className="btn btn-error text-white">
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
