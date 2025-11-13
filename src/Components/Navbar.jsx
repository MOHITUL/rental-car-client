import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Error logging out");
      });
  };

  // shared navlink style 
  const navLinkClass = ({ isActive }) =>
    `text-lg font-medium px-3 py-2 rounded-md transition-all duration-200
     ${isActive
      ? "text-blue-600 border-b-2 border-blue-600 bg-blue-50"
      : "text-gray-700 hover:text-blue-500 hover:bg-blue-50/30"
    }`;

  return (
    <div className="navbar bg-white shadow-sm sticky top-0 z-50 backdrop-blur-md bg-opacity-90">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={-1}
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/add-car" className={navLinkClass}>Add Car</NavLink></li>
            <li><NavLink to="/my-listings" className={navLinkClass}>My Listings</NavLink></li>
            <li><NavLink to="/my-bookings" className={navLinkClass}>My Bookings</NavLink></li>
            <li><NavLink to="/browse-cars" className={navLinkClass}>Browse Cars</NavLink></li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-3xl font-bold text-slate-900 tracking-tight">
          Drive<span className="text-blue-600">Now</span>
        </Link>
      </div>

      {/* CENTER MENU */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink to="/add-car" className={navLinkClass}>Add Car</NavLink></li>
          <li><NavLink to="/my-listings" className={navLinkClass}>My Listings</NavLink></li>
          <li><NavLink to="/my-bookings" className={navLinkClass}>My Bookings</NavLink></li>
          <li><NavLink to="/browse-cars" className={navLinkClass}>Browse Cars</NavLink></li>
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end gap-3">
        {!user ? (
          <>
            <NavLink to="/login" className={navLinkClass}>Login</NavLink>
            <NavLink to="/signup" className={navLinkClass}>Sign Up</NavLink>
          </>
        ) : (
          <div className="dropdown dropdown-end z-50">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={user?.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="User Avatar"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-white rounded-box w-52"
            >
              <li className='text-center'>
                <p className='font-semibold'>{user?.displayName || "User"}</p>
                <p className='text-sm text-gray-500'>{user?.email}</p>
              </li>
              <div className='divider'></div>
              <li>
                <button
                  onClick={handleLogout}
                  className='text-red-600 font-semibold hover:bg-red-50 transition'
                >
                  Log Out
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
