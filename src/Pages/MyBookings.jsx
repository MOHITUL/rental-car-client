import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bookings?email=${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data));
    }
  }, [user]);

  if (!user) return <p className="text-center mt-20 text-gray-500">Please login to view your bookings.</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h2 className="text-3xl font-bold text-center mb-8">My Bookings</h2>
      {bookings.length === 0 ? (
        <p className="text-center text-gray-500">No bookings found.</p>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {bookings.map(booking => (
            <div key={booking._id} className="bg-white rounded-2xl shadow-md p-6">
              <img src={booking.imageUrl} alt={booking.carName} className="w-full h-48 object-cover rounded-xl mb-4" />
              <h3 className="text-xl font-semibold">{booking.carName}</h3>
              <p className="text-gray-600">📍 {booking.location}</p>
              <p className="text-gray-800 font-medium mt-2">💰 {booking.rentPrice} / day</p>
              <p className="text-sm text-gray-500 mt-1">Booked on: {new Date(booking.bookedAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBookings;
