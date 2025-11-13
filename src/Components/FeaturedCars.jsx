import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { DollarSign, Car, User } from "lucide-react";

const FeaturedCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/featured")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-900">
        Featured Cars
      </h2>

      {cars.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Loading cars...</p>
      ) : (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {cars.map((car) => (
            <div
              key={car._id}
              className="bg-white/70 backdrop-blur-lg shadow-lg rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={car.imageUrl}
                alt={car.carName}
                className="h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {car.carName}
                </h3>

                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <DollarSign className="w-4 h-4" />
                  <span className="font-medium">{car.rentPrice}/day</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-1">
                  <Car className="w-4 h-4" />
                  <span>{car.category}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <User className="w-4 h-4" />
                  <span>{car.providerName}</span>
                </div>

                <Link
                  to={`/cars/${car._id}`}
                  className="block text-center bg-linear-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedCars;
