import React, { useEffect, useState } from "react";
import { DollarSign, Car, User, MapPin } from "lucide-react";
import SearchCars from "./SearchCars";

const FeaturedCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/featured")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-3 text-gray-900">
          Featured Cars
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Discover our handpicked selection
        </p>

        <SearchCars setCars={setCars} />

        {cars.length === 0 ? (
          <div className="flex justify-center items-center py-20">
            <p className="text-center text-gray-500 text-lg">Loading cars...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {cars.map((car) => (
              <div
                key={car._id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={car.imageUrl}
                    alt={car.carName}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">
                      {car.category}
                      
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {car.carName}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600">
                      <User className="w-4 h-4 mr-2 text-gray-400" />
                      <span className="text-sm">{car.providerName}</span>
                    </div>

                    {car.location && (
                      <div className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                        <span className="text-sm">{car.location}</span>
                        
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between mb-5 pt-3 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        Daily Rate
                      </p>
                      <p className="text-2xl font-bold text-gray-900">
                        ৳{car.rentPrice}
                        <span className="text-sm text-gray-500 font-normal">
                          /day
                        </span>
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => (window.location.href = `/cars/${car._id}`)}
                    className="block w-full text-center bg-linear-to-r from-slate-900 to-slate-700 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-500 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedCars;