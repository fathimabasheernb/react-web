import React, { useState } from "react";

function Nav({ onSearch }) {

  const [searchText, setSearchText] = useState("");

const handleSearch = () => {
  onSearch(searchText);
};
  return (
    <nav className="w-full bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-6">

        {/* Logo */}
        <h1 className="text-4xl font-extrabold tracking-tight text-blue-600">
          FLX<span className="text-gray-900">.</span>
        </h1>

        {/* Location */}
        <div className="hidden md:flex items-center border-2 border-gray-800 rounded-md px-3 py-3 gap-2 w-56">
          <span>📍</span>
          <input
            type="text"
            placeholder="Enter location"
            className="outline-none w-full text-sm"
          />
          <span>⌄</span>
        </div>

        {/* Search */}
        <div className="flex flex-1 border-2 border-gray-800 rounded-md overflow-hidden">

  <input
    type="text"
    placeholder="Find cars, mobiles, electronics and more..."
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
    onKeyDown={(e) => {
      if (e.key === "Enter") {
        handleSearch();
      }
    }}
    className="flex-1 px-4 py-3 outline-none text-sm"
  />

  <button
    onClick={handleSearch}
    className="bg-gray-900 text-white px-6 hover:bg-blue-600 transition"
  >
    🔍
  </button>

</div>

        {/* Login */}
        <button className="font-bold text-gray-800 hover:text-blue-600">
          Login
        </button>

        {/* Sell Button */}
        <button className="border-4 border-blue-500 rounded-full px-6 py-2 font-bold text-gray-900 hover:bg-blue-500 hover:text-white transition">
          + SELL
        </button>

      </div>

      {/* Category Navigation */}
      <div className="border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center gap-8 text-sm">

          <span className="font-bold text-gray-900">
            ALL CATEGORIES ⌄
          </span>

          <a className="text-gray-600 hover:text-blue-600 cursor-pointer">
            Cars
          </a>

          <a className="text-gray-600 hover:text-blue-600 cursor-pointer">
            Mobiles
          </a>

          <a className="text-gray-600 hover:text-blue-600 cursor-pointer">
            Electronics
          </a>

          <a className="text-gray-600 hover:text-blue-600 cursor-pointer">
            Fashion
          </a>

          <a className="text-gray-600 hover:text-blue-600 cursor-pointer">
            Furniture
          </a>

          <a className="text-gray-600 hover:text-blue-600 cursor-pointer">
            Properties
          </a>

        </div>

      </div>

    </nav>
  );
}

export default Nav;