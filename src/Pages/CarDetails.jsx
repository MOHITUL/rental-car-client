import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { MapPin, DollarSign, Tag, CheckCircle, Mail, User } from 'lucide-react';
import { toast } from 'react-toastify';

const CarDetails = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(false);

    // car details
    useEffect(() => {
        fetch(`http://localhost:3000/cars/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
            .catch(err => console.error(err));
    }, [id]);

    // booking
    const handleBooking = async () => {
  if (!user) {
    toast.warn("Please login to book this car");
    navigate('/login');
    return;
  }

  if (car.status === "unavailable") {
    toast.error("Sorry, this car is already booked");
    return;
  }

  try {
    setLoading(true);
    const res = await fetch(`http://localhost:3000/cars/${id}/book`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userEmail: user.email,
        userName: user.displayName
      })
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Car booked successfully");
      setCar({ ...car, status: "unavailable" });
    } else {
      toast.error(data.message || "Failed to book car");
    }
  } catch (err) {
    console.error(err);
    toast.error("Something went wrong");
  } finally {
    setLoading(false);
  }
};


    if (!car) return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className='text-center'>
                <div className='w-16 h-16 border-4 border-slate-900 border-t-transparent rounded-full animate-spin mx-auto mb-4'></div>
                <p className='text-xl text-gray-600'>Loading...</p>
            </div>
        </div>
    );

    return (
        <div className='min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 flex justify-center p-6'>
            <div className='max-w-6xl w-full'>
                {/* Hero Image Section */}
                <div className='relative mb-8 rounded-3xl overflow-hidden shadow-2xl group'>
                    <img 
                        src={car.imageUrl} 
                        alt={car.carName}
                        className='w-full h-150 object-cover transform group-hover:scale-105 transition-transform duration-500' 
                    />
                    <div className='absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent'></div>
                    <div className='absolute bottom-0 left-0 right-0 p-8'>
                        <h1 className='text-5xl font-bold text-white mb-2 drop-shadow-lg'>{car.carName}</h1>
                        <div className='flex items-center gap-2'>
                            <span className='px-4 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-medium border border-white/30'>
                                {car.category}
                            </span>
                            <span className={`px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1 
                                ${car.status === 'available' 
                                    ? 'bg-green-500/90 text-white' 
                                    : 'bg-red-500/90 text-white'}`}>
                                <CheckCircle className='w-4 h-4' />
                                {car.status}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Main Content Card */}
                <div className='bg-white/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 border border-white/20'>
                    {/* Description */}
                    <p className='text-gray-500 text-lg text-justify leading-relaxed mb-8'>{car.description}</p>

                    {/* Info Grid */}
                    <div className='grid md:grid-cols-3 gap-4 mb-8'>
                        <div className='bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100 hover:shadow-lg transition-shadow'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='p-2 bg-blue-500 rounded-lg'>
                                    <DollarSign className='w-5 h-5 text-white' />
                                </div>
                                <span className='text-gray-600 font-medium'>Rent Price</span>
                            </div>
                            <p className='text-2xl font-bold text-gray-900'>{car.rentPrice}<span className='text-sm text-gray-500'>/day</span></p>
                        </div>

                        <div className='bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100 hover:shadow-lg transition-shadow'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='p-2 bg-purple-500 rounded-lg'>
                                    <MapPin className='w-5 h-5 text-white' />
                                </div>
                                <span className='text-gray-600 font-medium'>Location</span>
                            </div>
                            <p className='text-xl font-semibold text-gray-900'>{car.location}</p>
                        </div>

                        <div className='bg-linear-to-br from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100 hover:shadow-lg transition-shadow'>
                            <div className='flex items-center gap-3 mb-2'>
                                <div className='p-2 bg-orange-500 rounded-lg'>
                                    <Tag className='w-5 h-5 text-white' />
                                </div>
                                <span className='text-gray-600 font-medium'>Category</span>
                            </div>
                            <p className='text-xl font-semibold text-gray-900'>{car.category}</p>
                        </div>
                    </div>

                    {/* Provider Card */}
                    <div className='bg-linear-to-r from-slate-50 to-slate-100 rounded-2xl p-6 mb-8 border border-slate-200'>
                        <h3 className='text-xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                            <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold'>
                                {car.providerName.charAt(0)}
                            </div>
                            Provider Information
                        </h3>
                        <div className='grid md:grid-cols-2 gap-4'>
                            <div className='flex items-center gap-3'>
                                <User className='w-5 h-5 text-gray-500' />
                                <div>
                                    <p className='text-sm text-gray-500'>Name</p>
                                    <p className='text-gray-900 font-semibold'>{car.providerName}</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-3'>
                                <Mail className='w-5 h-5 text-gray-500' />
                                <div>
                                    <p className='text-sm text-gray-500'>Email</p>
                                    <p className='text-gray-900 font-semibold'>{car.providerEmail}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <button onClick={handleBooking}
                        disabled={loading || car.status === "unavailable"}
                        className={`w-full text-white font-bold py-4 rounded-2xl transform transition-all duration-200 shadow-lg hover:shadow-xl 
                            ${car.status === 'available'
                                ? 'bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                                : 'bg-gray-400 cursor-not-allowed'}`}>
                        {loading ? "Booking..." : car.status === 'available' ? "Book Now" : "Unavailable"}
                    
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;