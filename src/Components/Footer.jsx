import React from 'react';
import { Mail, Phone, MapPin,  Twitter, Instagram, Linkedin } from 'lucide-react';
import {  FaXTwitter,FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className='bg-linear-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-300'>
            <div className='max-w-7xl mx-auto px-6 py-16'>
                <div className='grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-10'>

                    {/* Logo & Description */}
                    <div className="flex flex-col">
                        <div className="flex items-center mb-4">
                            <img 
                                src={'https://static.vecteezy.com/system/resources/previews/013/941/312/non_2x/initial-letter-cr-script-logo-free-vector.jpg'}
                                alt="Logo" 
                                className="h-12 w-12 rounded-lg mr-3 shadow-lg" 
                            />
                            <h2 className="text-2xl font-bold text-white">CarRental</h2>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted partner for premium car rentals. Experience luxury, comfort, and reliability on every journey.
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-white mb-4 text-lg">Contact Info</h3>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 group">
                                <Mail className="w-5 h-5 text-blue-400 mt-0.5 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <a href="mailto:support@carrental.com" className="text-gray-300 hover:text-white transition">
                                        support@carrental.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <Phone className="w-5 h-5 text-green-400 mt-0.5 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-sm text-gray-400">Phone</p>
                                    <a href="tel:+8801234567890" className="text-gray-300 hover:text-white transition">
                                        +880 1234 567890
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 group">
                                <MapPin className="w-5 h-5 text-red-400 mt-0.5 group-hover:scale-110 transition-transform" />
                                <div>
                                    <p className="text-sm text-gray-400">Address</p>
                                    <p className="text-gray-300">Dhaka, Bangladesh</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <button className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left">
                                    Privacy Policy
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left">
                                    Refund Policy
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left">
                                    User Agreement
                                </button>
                            </li>
                            <li>
                                <button className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 text-left">
                                    Terms of Service
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className='font-bold text-white mb-4 text-lg'>Follow Us</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Stay connected for latest updates and exclusive offers
                        </p>
                        <div className='flex gap-3'>
                            <a 
                                href="https://facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-600 hover:scale-110 transition-all duration-300 group"
                            >
                                <FaFacebook className="w-5 h-5 text-gray-300 group-hover:text-white" />
                            </a>
                            <a 
                                href="https://twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-lg hover:bg-sky-500 hover:scale-110 transition-all duration-300 group"
                            >
                                <FaXTwitter className="w-5 h-5 text-gray-300 group-hover:text-white" />
                            </a>
                            <a 
                                href="https://instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-lg hover:bg-linear-to-br hover:from-purple-600 hover:to-pink-500 hover:scale-110 transition-all duration-300 group"
                            >
                                <FaInstagram className="w-5 h-5 text-gray-300 group-hover:text-white" />
                            </a>
                            <a 
                                href="https://linkedin.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-lg hover:bg-blue-700 hover:scale-110 transition-all duration-300 group"
                            >
                                <FaLinkedin className="w-5 h-5 text-gray-300 group-hover:text-white" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            &copy; {new Date().getFullYear()} CarRental. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-sm text-gray-400">
                            <button className="hover:text-white transition">Privacy</button>
                            <button className="hover:text-white transition">Terms</button>
                            <button className="hover:text-white transition">Cookies</button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;