import { Eye, EyeOff, Image, Lock, Mail, User } from 'lucide-react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className='min-h-screen flex items-center justify-center p-4'>
            <div className='w-full max-w-md'>
                <div className='bg-white rounded-2xl shadow-xl p-8'>
                    <div className='text-center mb-8'>
                        <div className='inline-flex items-center justify-center w-15 h-15 rounded-full mb-4'>
                            <User />
                        </div>
                        <h1 className='text-3xl font-bold text-gray-800 mb-2'>Create Account</h1>
                        <p className='text-gray-600'>Join us today and get started</p>

                    </div>

                    {/* From */}
                    <div className='space-y-6'>
                        {/* Name */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Name</label>
                            <div className='relative'>
                                <User className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 ' />
                                <input
                                    type='text'
                                    name='name'
                                    placeholder='Enter your name'
                                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all' />

                            </div>
                        </div>
                        {/* Email */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Email</label>
                            <div className='relative'>
                                <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400' />
                                <input
                                    type='email'
                                    name='email'
                                    placeholder='Enter your email'
                                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all' />

                            </div>
                        </div>

                        {/* photo url */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Photo URL</label>
                            <div className='relative'>
                                <Image className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type='text'
                                    name='photoURL'
                                    placeholder='Enter your photo URL'
                                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all' />

                            </div>
                        </div>

                        {/* password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Create a password"
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            <p className="mt-2 text-xs text-gray-500">
                                Must be 6+ characters with uppercase and lowercase letters
                            </p>
                        </div>

                        {/* submit button */}
                        <button className='w-full font-semibold py-3 rounded-lg hover:from-blue-600 
              hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md'>
                            Create Account
                        </button>
                    </div>
                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-4 text-sm text-gray-500">OR</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Google */}
                    <button className="btn w-full mt-3 border-none font-semibold text-sm shadow-md ">
                        <FcGoogle className="text-2xl" />
                        Continue with Google
                    </button>

                    {/* Login */}
                    <div className='mt-6 text-center'>
                        <p className="text-gray-600">Already have an account?{''}
                            <Link to={'/login'} className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all">LogIn here</Link>
                        </p>
                    </div>

                </div>
                <p className="text-center text-sm text-gray-600 mt-6">
                    By registering, you agree to our Terms of Service and Privacy Policy
                </p>


            </div>
        </div>
    );
};

export default SignUp;