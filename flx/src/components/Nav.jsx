import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav({ onSearch, onCategorySelect }) {
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [showCategories, setShowCategories] = useState(false);

  const navigate = useNavigate();

  const categories = [
    "Cars",
    "Mobiles",
    "Electronics",
    "Fashion",
    "Furniture",
    "Properties"
  ];

  const handleSearch = () => {
    onSearch(searchText);

    setTimeout(() => {
      document.getElementById("products-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };

  const handleCategory = (category) => {
    onCategorySelect(category);
    setShowCategories(false);

    navigate("/");

    setTimeout(() => {
      document.getElementById("products-section")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }, 100);
  };

  return (
    <nav className="w-full bg-white/95 backdrop-blur-md shadow-md sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center gap-4">

        {/* Logo */}
        <button onClick={() => navigate("/")} className="text-4xl font-extrabold tracking-tight text-blue-600">
          FLX<span className="text-gray-900">.</span>
        </button>

        {/* Location */}
        <div className="hidden md:flex items-center border-2 border-gray-800 rounded-md px-3 py-3 gap-2 w-52">
          <span>📍</span>

          <input
            type="text"
            placeholder="Enter location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="outline-none w-full text-sm"
          />
        </div>

        {/* Search */}
        <div className="flex flex-1 min-w-[180px] border-2 border-gray-800 rounded-md overflow-hidden search-box transition-all duration-300">

          <input
            type="text"
            placeholder="Find cars, mobiles, electronics..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="flex-1 px-4 py-3 outline-none text-sm"
          />

          <button
            onClick={handleSearch}
            className="bg-gray-900 text-white px-6 hover:bg-blue-600 transition"
            aria-label="Search products"
          >
            🔍
          </button>

        </div>

        {/* Login */}
        <button
          onClick={() => navigate("/login")}
          className="font-bold text-gray-800 hover:text-blue-600 transition"
        >
          Login
        </button>

        {/* Sell */}
        <button
          onClick={() => navigate("/sell")}
          className="border-4 border-blue-500 rounded-full px-6 py-2 font-bold text-gray-900 hover:bg-blue-500 hover:text-white transition"
        >
          + SELL
        </button>

      </div>

      {/* Category Navigation */}
      <div className="border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-wrap items-center gap-6 text-sm">

          <div className="relative">

            <button
              onClick={() => setShowCategories(!showCategories)}
              className="font-bold text-gray-900 hover:text-blue-600 transition"
            >
              ALL CATEGORIES {showCategories ? "⌃" : "⌄"}
            </button>

            {showCategories && (
              <div className="absolute left-0 top-8 bg-white shadow-xl rounded-xl p-3 w-52 z-50 border">

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategory(category)}
                    className="block w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                  >
                    {category}
                  </button>
                ))}

                <button
                  onClick={() => handleCategory("All")}
                  className="block w-full text-left px-4 py-3 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition font-semibold"
                >
                  All Products
                </button>

              </div>
            )}

          </div>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategory(category)}
              className="nav-link text-gray-600 hover:text-blue-600"
            >
              {category}
            </button>
          ))}

        </div>

      </div>

    </nav>
  );
}

export default Nav;