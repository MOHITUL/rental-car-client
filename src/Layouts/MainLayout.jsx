import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className='grow'>
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default MainLayout;