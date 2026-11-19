import { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";

function AllProducts({ favorites, onToggleFavorite }) {

  const navigate = useNavigate();

  const [showFavorites, setShowFavorites] = useState(false);

  const displayedProducts = showFavorites
    ? products.filter((product) => favorites.includes(product.id))
    : products;

  return (

    <section className="min-h-screen bg-gray-50 py-12 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="flex flex-col md:flex-row justify-between items-center mb-10">

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              FLX Marketplace
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Explore All Products
            </h1>

            <p className="text-gray-500 mt-2">
              Find everything you are looking for in one place.
            </p>

          </div>

          <button
            onClick={() => navigate("/")}
            className="mt-5 md:mt-0 bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition"
          >
            ← Back to Home
          </button>

        </div>

        {/* Product Count and Favourite Filter */}

        <div className="flex justify-between items-center mb-8">

          <p className="text-gray-600 font-medium">
            {displayedProducts.length} Products Available
          </p>

          <button
            onClick={() => setShowFavorites(!showFavorites)}
            className={`px-5 py-2 rounded-lg font-semibold transition ${
              showFavorites
                ? "bg-red-500 text-white"
                : "bg-white text-gray-700 border border-gray-300"
            }`}
          >
            ❤️ {showFavorites ? "Show All Products" : "My Favourites"}
          </button>

        </div>

        {/* Products Grid */}

        {displayedProducts.length === 0 ? (

          <div className="text-center py-20 bg-white rounded-2xl">

            <p className="text-5xl mb-4">♡</p>

            <h2 className="text-2xl font-bold text-gray-800">
              No Favourite Products Yet
            </h2>

            <p className="text-gray-500 mt-2">
              Click the heart button on a product to save it here.
            </p>

          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">

            {displayedProducts.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 border border-gray-100 group"
              >

                {/* Product Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                  />

                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-full">
                    {product.category}
                  </span>

                  {/* Favourite Button */}

                  <button
                    onClick={() => onToggleFavorite(product.id)}
                    aria-label={
                      favorites.includes(product.id)
                        ? "Remove from favourites"
                        : "Add to favourites"
                    }
                    className="absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow-md text-xl hover:scale-110 transition"
                  >
                    {favorites.includes(product.id) ? "❤️" : "♡"}
                  </button>

                </div>

                {/* Product Information */}

                <div className="p-5">

                  <h2 className="text-lg font-bold text-gray-800 truncate">
                    {product.name}
                  </h2>

                  <p className="text-2xl font-extrabold text-blue-600 mt-3">
                    {product.price}
                  </p>

                  <div className="flex flex-col gap-2 mt-4 text-sm text-gray-500">

                    <p>📍 {product.location}</p>

                    <p>📅 Posted: {product.date}</p>

                    <p>Product ID: #{product.id}</p>

                  </div>

                  {/* View Product */}

                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
                  >
                    View Product →
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>

  );

}

export default AllProducts;