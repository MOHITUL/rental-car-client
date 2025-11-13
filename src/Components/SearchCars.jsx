import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchCars = ({ setCars }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async () => {
    if (!searchTerm) return;

    try {
      const res = await fetch(`http://localhost:3000/search?name=${searchTerm}`);
      const data = await res.json();
      setCars(data); 
    } catch (error) {
      console.error("Search error:", error);
    }
  };

  const handleClear = () => {
    setSearchTerm("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch(); 
  };

  return (
    <div className="mb-10 max-w-2xl mx-auto">
      <div className="relative flex items-center gap-3">
        {/* Search Icon */}
        <div className="absolute left-5 text-gray-400 pointer-events-none">
          <Search className="w-5 h-5" />
        </div>

        {/* Input Field */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search by car name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress}
            className="w-full pl-12 pr-12 py-4 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all duration-300 text-gray-800 placeholder-gray-400 shadow-sm"
          />
          
          {/* Clear Button */}
          {searchTerm && (
            <button
              onClick={handleClear}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Search Button */}
        <button
          onClick={handleSearch}
          className="bg-linear-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center gap-2"
        >
          <Search className="w-5 h-5" />
          Search
        </button>
      </div>

      
      
    </div>
  );
};

export default SearchCars;