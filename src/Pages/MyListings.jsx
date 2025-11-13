import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { toast } from "react-toastify";
import { Edit, Trash2, X } from "lucide-react";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null);

  // fetch provider cars
  useEffect(() => {
    if (user?.email) {
      fetch(`https://car-rental-server-psi-three.vercel.app/my-listings?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setCars(data);
          setLoading(false);
        });
    }
  }, [user]);

  // delete car
const handleDelete = async (id) => {
  // SweetAlert2 confirm dialog
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "This action cannot be undone!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    cancelButtonText: "Cancel",
  });

  // If user cancels, stop here
  if (!result.isConfirmed) return;

  try {
    const res = await fetch(`https://car-rental-server-psi-three.vercel.app/cars/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();

    if (data.deletedCount > 0) {
      Swal.fire("Deleted!", "Car deleted successfully.", "success");
      toast.success("Car deleted successfully!");
      setCars(cars.filter((car) => car._id !== id));
    } else {
      Swal.fire("Error", "Failed to delete car.", "error");
      toast.error("Failed to delete car");
    }
  } catch (err) {
    Swal.fire("Error", "Something went wrong!", "error");
    toast.error("Failed to delete car");
  }
};


  // update car
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedCar = {
      carName: form.carName.value,
      description: form.description.value,
      category: form.category.value,
      rentPrice: form.rentPrice.value,
      location: form.location.value,
      imageUrl: form.imageUrl.value,
      status: form.status.value,
    };

    try {
      const res = await fetch(
        `https://car-rental-server-psi-three.vercel.app/cars/${selectedCar._id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedCar),
        }
      );
      const data = await res.json();
      if (data.modifiedCount > 0) {
        toast.success("Car updated successfully!");
        setCars(
          cars.map((car) =>
            car._id === selectedCar._id
              ? { ...car, ...updatedCar }
              : car
          )
        );
        setSelectedCar(null);
      } else {
        toast.warn("No changes detected.");
      }
    } catch (err) {
      toast.error("Update failed");
    }
  };

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center mb-8 italic">My Listings Cars</h2>

      {cars.length === 0 ? (
        <p className="text-center text-gray-500">No cars added yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-xl">
            <thead className="bg-gray-100">
              <tr className="text-left text-gray-700">
                <th className="p-4">Car Name</th>
                <th className="p-4">Category</th>
                <th className="p-4">Rent Price</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car._id} className="border-t hover:bg-gray-50">
                  <td className="p-4 font-medium">{car.carName}</td>
                  <td className="p-4">{car.category}</td>
                  <td className="p-4">${car.rentPrice}/day</td>
                  <td
                    className={`p-4 font-semibold ${
                      car.status === "available"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {car.status}
                  </td>
                  <td className="p-4 flex justify-center gap-4">
                    <button
                      onClick={() => setSelectedCar(car)}
                      className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                    >
                      <Edit size={18} /> Update
                    </button>
                    <button
                      onClick={() => handleDelete(car._id)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                      <Trash2 size={18} /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Update Modal */}
      {selectedCar && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-8 w-full max-w-lg relative shadow-xl">
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={22} />
            </button>
            <h3 className="text-2xl font-bold mb-6 text-center">
              Update Car Details
            </h3>
            <form onSubmit={handleUpdate} className="space-y-4">
              <input
                name="carName"
                defaultValue={selectedCar.carName}
                className="w-full border p-3 rounded-lg"
                placeholder="Car Name"
                required
              />
              <textarea
                name="description"
                defaultValue={selectedCar.description}
                className="w-full border p-3 rounded-lg"
                placeholder="Description"
                required
              />
              <select
                name="category"
                defaultValue={selectedCar.category}
                className="w-full border p-3 rounded-lg"
              >
                <option>Sedan</option>
                <option>SUV</option>
                <option>Luxury</option>
                <option>Electric</option>
                <option>Hatchback</option>
              </select>
              <input
                name="rentPrice"
                type="number"
                defaultValue={selectedCar.rentPrice}
                className="w-full border p-3 rounded-lg"
                placeholder="Rent Price"
                required
              />
              <input
                name="location"
                defaultValue={selectedCar.location}
                className="w-full border p-3 rounded-lg"
                placeholder="Location"
                required
              />
              <input
                name="imageUrl"
                defaultValue={selectedCar.imageUrl}
                className="w-full border p-3 rounded-lg"
                placeholder="Image URL"
              />
              <select
                name="status"
                defaultValue={selectedCar.status}
                className="w-full border p-3 rounded-lg"
              >
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>

              {/* Read-only fields */}
              <input
                value={selectedCar.providerName}
                readOnly
                className="w-full border p-3 rounded-lg bg-gray-100"
              />
              <input
                value={selectedCar.providerEmail}
                readOnly
                className="w-full border p-3 rounded-lg bg-gray-100"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListings;
