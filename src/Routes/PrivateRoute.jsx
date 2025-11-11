import React, {  useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { BeatLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if (loading) return <p className='min-h-screen  text-center mt-100'><BeatLoader size={20} /></p>;

    if(!user){
        return <Navigate to="/login" state={{from: location}} replace/>
    }
    return children;
};

export default PrivateRoute;