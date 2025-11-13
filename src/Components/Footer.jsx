import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className='bg-gray-900 text-gray-300 py-10'>
            <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1  gap-8'>

                {/* logo & website name */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center justify-center">
                        <img src={'https://static.vecteezy.com/system/resources/previews/013/941/312/non_2x/initial-letter-cr-script-logo-free-vector.jpg'}
                            alt="Logo" className="h-12 mb-3" />
                        <h2 className="text-2xl font-bold text-white">CarRental</h2>
                    </div>
                </div>

                {/* contact */}
                <div>
                    <h3 className="font-semibold text-white mb-3">Contact Info</h3>
                    <p>Email: support@carrental.com</p>
                    <p>Phone: +880 1234 567890</p>
                    <p>Address: Dhaka, Bangladesh</p>
                </div>

                {/* terms */}
                <div>
                    <h3 className="font-semibold text-white mb-3">Terms & Conditions</h3>
                    <ul>
                        <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white transition cursor-pointer">Refund Policy</li>
                        <li className="hover:text-white transition cursor-pointer">User Agreement</li>
                    </ul>
                </div>

                {/* social */}
                <div>
                    <h3 className='font-semibold text-white mb-3'>Follow Us</h3>
                    <div className='flex gap-4'>
                        <a href="https://facebook.com" target="_blank">
                            <FaFacebookF className="w-6 h-6 hover:text-white transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank">
                            <FaXTwitter
                                className="w-6 h-6 hover:text-white transition" />
                        </a>
                        <a href="https://instagram.com" target="_blank">
                            <FaInstagram
                                className="w-6 h-6 hover:text-white transition" />
                        </a>
                        <a href="https://linkedin.com" target="_blank">
                            <FaLinkedin
                                className="w-6 h-6 hover:text-white transition" />
                        </a>


                    </div>
                </div>
            </div>
            <div className="mt-10 text-center border-t border-gray-700 pt-5 text-gray-500 text-sm">
                 &copy; {new Date().getFullYear()} CarRental. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer; 