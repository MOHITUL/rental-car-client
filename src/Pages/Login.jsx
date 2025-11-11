import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import app from '../firebase/firebase.config';
import { toast } from 'react-toastify';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({email: '', password: ''});
    const navigate = useNavigate();

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider

    // input change
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    };

    // password validation
    const validatePassword = (password) =>{
        if (password.length < 6){
            toast.error('Password must be at least 6 characters long');
            return false;
        }
        if (!/[A-Z]/.test(password)){
            toast.error('Password must contain at least one uppercase letter');
            return false;
        }
        if (!/[a-z]/.test(password)){
            toast.error('Password must contain at least one lowercase letter');
            return false;
        }
        return true;
    };

    // email login
    const handleEmailLogin = async (e) => {
        e.preventDefault();
        const {email, password} = formData;

        if(!validatePassword(password)) return;

        try{
            await signInWithEmailAndPassword(auth, email, password);
            toast.success('Successfully logged in');
            navigate('/');
        } catch (error) {
            console.error(error);
            if (error.code === 'auth/invalid-credential'){
                toast.error('Invalid email or password');
            } else {
                toast.error(error.message);
            }
        }
    };

    // google
    const handleGoogleLogin = async () =>{
        try {
            await signInWithPopup(auth, googleProvider);
            toast.success('Logged in with Google');
            navigate('/');
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    }
    return (
        <div className='min-h-screen flex items-center justify-center p-4'>
            <div className='w-full max-w-md'>
                <div className='bg-white rounded-2xl shadow-xl p-8 space-y-6'>
                    <div className='text-center space-y-2'>
                        <div className='inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4'>
                            <Lock className='w-10 h-10 ' />
                        </div>
                        <h1 className='text-3xl font-bold text-gray-900'>Welcome Back</h1>
                        <p className='text-gray-500'>Sign in to your account to continue</p>
                    </div>

                    {/* login fields */}
                    <form onSubmit={handleEmailLogin} className='space-y-5'>
                        <div className='space-y-2'>
                            <label className='block text-sm font-medium text-gray-700'>Email Address</label>
                            <div className='relative'>
                                <Mail className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                                <input
                                    id='email'
                                    type='email'
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder='you@example.com'
                                    className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all' 
                                    required/>
                            </div>
                        </div>
                        {/* password */}
                        <div className='space-y-2'>
                            <label className='block text-sm font-medium text-gray-700'>Password</label>
                            <div className='relative'>
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                <input
                                    id='password'
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='••••••••'
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                        </div>
                        {/* forget */}
                        <div className='text-right text-sm text-blue-600 hover:text-blue-700 font-medium'>
                            Forgot Password?
                        </div>

                        {/* Login Button */}
                        <button
                            type="submit"

                            className="w-full py-3 rounded-lg font-semibold  transition-all  cursor-pointer shadow-lg hover:shadow-xl"
                        >
                            SignIn
                        </button>
                    </form>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-white text-gray-500">Or continue with</span>
                        </div>
                    </div>

                    {/* Google */}
                    <button
                    onClick={handleGoogleLogin}
                    className="btn w-full mt-3 border-none font-semibold text-sm shadow-md ">
                        <FcGoogle className="text-2xl" />
                        Continue with Google
                    </button>

                    {/* Register Link */}
                    <div className="text-center pt-4 border-t border-gray-200">
                        <p className="text-gray-600">
                            Don't have an account?{' '}
                            <Link to={'/signup'} className="text-blue-600 hover:text-blue-700 font-semibold hover:underline transition-all">
                                Create one now
                            </Link>
                        </p>
                    </div>

            </div>

        </div>

        </div >
    );
};

export default Login;