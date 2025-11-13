import { useContext, useEffect, useState } from "react";
import { Calendar, User, Car as CarIcon, Clock, MapPin } from "lucide-react";
import { AuthContext } from "../context/AuthContext";

export default function MyBookings() {
  const { user } = useContext(AuthContext);
  const [bookedCars, setBookedCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    fetch(`http://localhost:3000/bookings?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setBookedCars(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
        setLoading(false);
      });
  }, [user]);

  // Skeleton Loader Component
  const SkeletonCard = () => (
    <div className="p-6 bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-sm animate-pulse">
      <div className="flex justify-between items-center mb-4">
        <div className="h-7 w-40 bg-gray-200 rounded-lg"></div>
        <div className="h-6 w-20 bg-gray-100 rounded-full"></div>
      </div>
      <div className="space-y-3">
        <div className="h-5 w-32 bg-gray-200 rounded-md"></div>
        <div className="h-5 w-48 bg-gray-200 rounded-md"></div>
        <div className="h-5 w-36 bg-gray-200 rounded-md"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-10 bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          My Bookings
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <SkeletonCard />
          <SkeletonCard />
        </div>
      </div>
    );
  }

  if (bookedCars.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-linear-to-br from-gray-50 to-gray-100 p-12 rounded-3xl shadow-lg border border-gray-100">
          <CarIcon className="w-20 h-20 mx-auto text-gray-300 mb-6" strokeWidth={1.5} />
          <p className="text-2xl font-semibold text-gray-700 mb-2">No Bookings Yet!</p>
          <p className="text-md text-gray-500 max-w-sm mx-auto">
            It looks like you haven't booked any cars. Start exploring our selection and find your perfect ride.
          </p>
          
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Gradient Title */}
      <h2 className="text-4xl font-extrabold text-center mb-12 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        My Bookings
      </h2>

      {/* Responsive Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {bookedCars.map((booking) => (
          <div
            key={booking._id}
            className="group relative p-7 bg-white/70 backdrop-blur-lg border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1"
          >
            {/* Subtle Gradient Overlay on Hover */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 bg-linear-to-br from-indigo-50 to-purple-50"></div>

            {/* Car Name and Status Badge */}
            <div className="flex justify-between items-start mb-5">
              <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                <CarIcon className="w-7 h-7 text-indigo-500" strokeWidth={2} />
                {booking.carName}
              </h3>
              <span
                className={`px-4 py-1.5 text-sm font-semibold rounded-full text-white shadow-md ${
                  booking.status === "Confirmed"
                    ? "bg-linear-to-r from-green-500 to-emerald-600"
                    : booking.status === "Pending"
                    ? "bg-linear-to-r from-yellow-500 to-orange-600"
                    : "bg-linear-to-r from-blue-500 to-indigo-600"
                }`}
              >
                {booking.status || "Booked"}
              </span>
            </div>

            {/* Details Section */}
            <div className="space-y-4 text-base text-gray-700">
              <p className="flex items-center gap-3">
                <User className="w-5 h-5 text-purple-500" strokeWidth={1.5} />
                <span className="font-medium text-gray-800">Provider:</span> {booking.providerName}
              </p>
              <p className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-pink-500" strokeWidth={1.5} />
                <span className="font-medium text-gray-800">Booked On:</span>{" "}
                {new Date(booking.bookedAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <div className="flex items-center gap-3 pt-2 text-xl font-bold text-indigo-700">
                <span className="text-2xl">৳</span>
                {booking.rentPrice}
                <span className="text-base font-normal text-gray-500">/ day</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}