import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start px-2 lg:px-4">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <img
                            src="https://i.ibb.co.com/MxTVy0cJ/273980872-1550789058647411-6797711509175348982-n.jpg"
                            className="h-14 w-14 rounded-full"
                            alt="profile"
                        />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li><a>Home</a></li>
                        <li><a>Donor List</a></li>
                        <li><a>Our Activity</a></li>
                    </ul>
                </div>

                <img className='hidden lg:block lg:w-16 lg:h-16 ' src="https://i.ibb.co.com/MxTVy0cJ/273980872-1550789058647411-6797711509175348982-n.jpg" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-4">
                    <li><a>Home</a></li>
                    <li><a>Donor List</a></li>
                    <li><a>Our Activity</a></li>
                </ul>
            </div>

            <div className="navbar-end px-4">
                <a className="btn">Log in</a>
            </div>
        </div>
    );
};

export default Navbar;