import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { user, setUser } = useContext(AuthContext);

    //  Logout function
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

    return (
        <div className="navbar bg-base-100 shadow-sm">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/add-car'}>Add Car</NavLink></li>
                        <li><NavLink to={'/my-listings'}>My Listings</NavLink></li>
                        <li><NavLink to={'/my-bookings'}>My Bookings</NavLink></li>
                        <li><NavLink to={'/browse-cars'}>Browse Cars</NavLink></li>
                    </ul>
                </div>
                <Link className="btn btn-ghost text-3xl font-bold text-slate-900">DriveNow</Link>
            </div>

            {/* -------- CENTER MENU -------- */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'} className='text-lg font-medium'>Home</NavLink></li>
                    <li><NavLink to={'/add-car'} className='text-lg font-medium'>Add Car</NavLink></li>
                    <li><NavLink to={'/my-listings'} className='text-lg font-medium'>My Listings</NavLink></li>
                    <li><NavLink to={'/my-bookings'} className='text-lg font-medium'>My Bookings</NavLink></li>
                    <li><NavLink to={'/browse-cars'} className='text-lg font-medium'>Browse Cars</NavLink></li>
                </ul>
            </div>

            {/* -------- RIGHT SIDE -------- */}
            <div className="navbar-end gap-3">
                {!user ? (
                    <>
                        <NavLink to={'/login'} className='text-lg font-medium'>Login</NavLink>
                        <NavLink to={'/signup'} className='text-lg font-medium'>Sign Up</NavLink>
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
                            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52"
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
