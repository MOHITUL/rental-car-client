import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { Eye, EyeOff, Image, Lock, Mail, User } from 'lucide-react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import app from '../firebase/firebase.config'
import { toast } from 'react-toastify';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        photoURL: '',
        password: '',
    });

    const navigate = useNavigate();

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // input
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    // password validation
    const validatePassword = (password) => {
        if (password.length < 6){
            toast.error('Password must be at least 6 characters long');
            return false;
        }
        if (!/[A-Z]/.test(password)){
            toast.error('Password must be at least one uppercase letter');
            return false;
        }
        if (!/[a-z]/.test(password)){
            toast.error('Password must be at least one lowercase letter');
            return false;
        }
        return true;
    };

    // email + password
    const handleSignUp = async (e) => {
        e.preventDefault();
        const {name, email, photoURL, password} =formData;
        if(!validatePassword(password)) return;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile (user, {
                displayName: name,
                photoURL: photoURL || ''
            });
            toast.success('Account created successfully');
            navigate('/');
        } catch(error) {
            console.error(error);
            if (error.code === 'auth/email-already-in-use'){
                toast.error('This email is already registered')
            } else {
                toast.error(error.message)
            }
        }
    };

    // google
    const handleGoogleSignUp = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate('/');
        } catch(error) {
            console.error(error);
            toast.error(error.message);
        }
    };
    return (
        <div className='min-h-screen flex items-center justify-center p-4 '>
            <div className='w-full max-w-md '>
                <div className='bg-white rounded-2xl shadow-xl p-8'>
                    <div className='text-center mb-8'>
                        <div className='inline-flex items-center justify-center w-18 h-18 rounded-full mb-4 bg-slate-900'>
                            <User className='w-15 h-15 text-white'/>
                        </div>
                        <h1 className='text-3xl font-bold text-gray-800 mb-2'>Create Account</h1>
                        <p className='text-gray-600'>Join us today and get started</p>

                    </div>

                    {/* From */}
                    <form onSubmit={handleSignUp} className='space-y-6'>
                        {/* Name */}
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>Name</label>
                            <div className='relative'>
                                <User className='absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 ' />
                                <input
                                    type='text'
                                    name='name'
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder='Enter your name'
                                    required
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
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='Enter your email'
                                    required
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
                                    value={formData.photoURL}
                                    onChange={handleChange}
                                    placeholder='Enter your photo URL'
                                    required
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
                                    value={formData.password}
                                    onChange={handleChange}
                                    placeholder="Create a password"
                                    required
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
                        <button
                        type='submit'
                        className='w-full font-semibold py-3 rounded-lg hover:from-blue-600 
              hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-md'>
                            Create Account
                        </button>
                    </form>
                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="px-4 text-sm text-gray-500">OR</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Google */}
                    <button
                    onClick={handleGoogleSignUp}
                    className="btn w-full mt-3 border-none font-semibold text-sm shadow-md ">
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