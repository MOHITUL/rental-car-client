import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const BrowseCars = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/cars")
            .then(res => res.json())
            .then(data => setCars(data))
            .catch(err => console.error("Error fetching cars:", err));
    }, []);
    return (
        <div className='min-h-screen bg-gray-50 p-6'>
            <h2 className='text-3xl font-bold text-center mb-8'>Available Cars</h2>

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mr-15 ml-15'>
                {
                    cars.map(car => (
                        <div key={car._id} className='bg-white shadow-lg p-5'>
                            <img src={car.imageUrl} alt="{car.carName}"
                                className='rounded-lg h-80 w-full object-cover' />
                            <h3 className='text-xl font-semibold mt-3'>{car.carName}</h3>
                            <p className='text-gray-600'>Category:{car.category}</p>
                            <p className='text-gray-700 font-medium'>Rent: ${car.rentPrice}/day</p>
                            <p className='text-sm text-gray-500'>Location:{car.location}</p>

                            <div className='mt-4'>
                                <Link to={`/cars/${car._id}`}
                                className='inline-block bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-blue-600'>View Details</Link>
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default BrowseCars;