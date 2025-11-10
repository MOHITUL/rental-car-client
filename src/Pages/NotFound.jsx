import { Home, MapPin } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-gray-300 select-none">
            404
          </h1>
          <div className="flex items-center justify-center gap-2 mt-4">
            <MapPin className="text-yellow-500" size={24} />
            <p className="text-2xl font-semibold text-gray-700">
              Route Not Found
            </p>
          </div>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Oops! Looks like you took a wrong turn
          </h2>
          <p className="text-gray-600 text-lg max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on the road!
          </p>
        </div>

        

        {/* Button */}
        <Link
          to={'/'}
          className="inline-flex items-center gap-2 bg-slate-800 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <Home size={24} />
          Back to Home
        </Link>

      </div>
    </div>
    );
};

export default NotFound;