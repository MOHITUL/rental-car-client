import React, { useState } from "react";

const SearchCars = ({ setCars }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const res = await fetch(`http://localhost:3000/search?name=${searchTerm}`);
      const data = await res.json();
      setCars(data); // update car list in parent component
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch(); // search on Enter key
  };

  return (
    <div className="flex gap-2 mb-8 justify-center">
      <input
        type="text"
        placeholder="Search by car name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        className="border p-2 rounded w-1/2"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Search
      </button>
    </div>
  );
};

export default SearchCars;
