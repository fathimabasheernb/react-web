import { useNavigate } from "react-router-dom";
import products from "../data/products";

function Card({ searchTerm, favorites, onToggleFavorite }) {

  const navigate = useNavigate();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes((searchTerm || "").toLowerCase()) ||
    product.category.toLowerCase().includes((searchTerm || "").toLowerCase()) ||
    product.location.toLowerCase().includes((searchTerm || "").toLowerCase())
  );

  return (

    <section
      id="products-section"
      className="bg-gray-50 py-16 px-6 md:px-12 scroll-mt-6"
    >

      <div className="max-w-7xl mx-auto">

        <div className="flex justify-between items-center mb-10">

          <div>

            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              Explore Marketplace
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Fresh Recommendations
            </h2>

            <p className="text-gray-500 mt-2">
              Discover amazing deals and find something you love.
            </p>

          </div>

          <button className="hidden md:block text-blue-600 font-semibold hover:underline">
            View All →
          </button>

        </div>

        {/* Product Cards */}

        {filteredProducts.length === 0 ? (

          <p className="text-center text-gray-500 py-10">
            No products found. Try another search!
          </p>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group border border-gray-100"
              >

                {/* Product Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
                  />

                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {product.category}
                  </span>

                  <button
                    onClick={() => onToggleFavorite(product.id)}
                    className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full shadow-md text-xl hover:scale-110 transition"
                  >
                    {favorites.includes(product.id) ? "❤️" : "♡"}
                  </button>

                </div>

                {/* Product Details */}

                <div className="p-5">

                  <h3 className="text-lg font-bold text-gray-800 truncate">
                    {product.name}
                  </h3>

                  <p className="text-2xl font-extrabold text-blue-600 mt-3">
                    {product.price}
                  </p>

                  <div className="flex justify-between items-center mt-4 text-sm text-gray-500">

                    <span>📍 {product.location}</span>

                    <span>{product.date}</span>

                  </div>

                  {/* View Product Button */}

                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300"
                  >
                    View Product →
                  </button>

                </div>

              </div>

            ))}

          </div>

        )}

        {/* Explore More */}

        <div className="text-center mt-12">

          <button
            onClick={() => navigate("/products")}
            className="border-2 border-blue-600 text-blue-600 px-10 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Explore More Products →
          </button>

        </div>

      </div>

    </section>

  );

}

export default Card;