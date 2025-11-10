import { Calendar, DollarSign, Headphones, ShieldCheck } from 'lucide-react';
import React from 'react';

const WhyRent = () => {
    const features = [
        {
            icon: <Calendar size={50} className='text-yellow-500'/>,
            title: 'Easy Booking',
            description:'Rent your car in just a few clicks with our fast and seamless online booking system.'
        },
        {
            icon: <DollarSign size={50} className='text-yellow-500'/>,
            title: 'Affordable Rates',
            description:'Enjoy competitive prices with no hidden fees - pay only for what you need.'
        },
        {
            icon: <ShieldCheck size={50} className='text-yellow-500'/>,
            title: 'Trusted Providers',
            description:'All our vehicles come from verified partners ensuring safety and reliability.'
        },
        {
            icon: <Headphones size={50} className='text-yellow-500'/>,
            title: '24/7 Support',
            description:'Our friendly support team is available around the clock to assist you anytime.'
        },
    ]
    return (
        <div className='py-16 bg-gray-100'>
            <div className='max-w-7xl mx-auto px-6 text-center'>
                <h2 className='text-4xl font-bold mb-4 text-gray-900'>Why Rent With Us</h2>
                <p className='text-gray-600 max-w-2xl mx-auto mb-12'>We make your journey easier, safer, and more enjoyable with premium service and unbeatable value.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {
                        features.map((features, index) => (
                            <div  key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 flex flex-col items-center text-center group">
                                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                    {features.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                                    {features.title}
                                </h3>
                                <p className="text-gray-600">
                                    {features.description}
                                </p>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
};

export default WhyRent;
