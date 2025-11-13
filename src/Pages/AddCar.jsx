import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const AddCar = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        carName: "",
        description: "",
        category: "",
        rentPrice: "",
        location: "",
        imageUrl: "",
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCar = {
            ...formData,
            providerName: user.displayName,
            providerEmail: user.email,
        };
        try {
            const res = await fetch("https://car-rental-server-psi-three.vercel.app/cars", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newCar),
            });
            if (res.ok) {
                toast.success("Car added successfully");
                setFormData({
                    carName: "",
                    description: "",
                    category: "",
                    rentPrice: "",
                    location: "",
                    imageUrl: "",
                });
            } else {
                toast.error("Failed to add car");
            }
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while adding the car");
        }
    };

    // redirect
    useEffect(() => {
        if (!user) {
            toast.info("You need to log in to add a car");
            navigate("/login");
        }
    }, [user, navigate]);

    if (!user) return null;
    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50 p-6'>
            <div className='bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-8'>
                <h2 className='text-3xl font-bold text-center text-gray-800 mb-6 italic'>Add a New Car</h2>
                <form onSubmit={handleSubmit} className='space-y-5'>
                    {/* car name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Car Name
                        </label>
                        <input
                            type="text"
                            name="carName"
                            value={formData.carName}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                            rows="3"
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        ></textarea>
                    </div>

                    {/* category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category
                        </label>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        >
                            <option value="">Select Category</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="Luxury">Luxury</option>
                            <option value="Electric">Electric</option>
                        </select>
                    </div>

                    {/* Rent */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Rent Price (per day)
                        </label>
                        <input
                            type="number"
                            name="rentPrice"
                            value={formData.rentPrice}
                            onChange={handleChange}
                            required
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                        />
                    </div>

                    {/* location */}
                    <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Hosted Image URL
            </label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              required
              placeholder="Enter image URL (Unsplash, etc.)"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* submit */}
          <button
            type="submit"
            className="w-full bg-slate-900 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition-all"
          >
            Add Car
          </button>
                </form>
            </div>
        </div>
    );
};

export default AddCar;