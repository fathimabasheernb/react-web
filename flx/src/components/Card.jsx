import { useNavigate } from "react-router-dom";
import products from "../data/products";

function Card({
  searchTerm,
  selectedCategory,
  favorites = [],
  onToggleFavorite
}) {
  const navigate = useNavigate();

  const categoryKeywords = {
    Cars: ["car", "vehicle", "bike", "motorcycle"],
    Mobiles: ["mobile", "phone", "smartphone"],
    Electronics: ["electronic", "laptop", "computer", "camera", "watch", "appliance"],
    Fashion: ["fashion", "clothing", "dress"],
    Furniture: ["furniture", "sofa", "table", "chair"],
    Properties: ["property", "properties", "apartment", "flat", "house", "real estate"]
  };

  const filteredProducts = products.filter((product) => {
    const search = (searchTerm || "").toLowerCase().trim();

    const matchesSearch =
      product.name.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search) ||
      product.location.toLowerCase().includes(search);

    const keywords = categoryKeywords[selectedCategory] || [];

    const matchesCategory =
      !selectedCategory ||
      selectedCategory === "All" ||
      keywords.some((keyword) =>
        `${product.name} ${product.category}`.toLowerCase().includes(keyword)
      );

    return matchesSearch && matchesCategory;
  });

  return (
    <section
      id="products-section"
      className="bg-gray-50 py-16 px-6 md:px-12 scroll-mt-32"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="flex flex-wrap justify-between items-center gap-4 mb-10">

          <div>
            <p className="text-blue-600 font-semibold uppercase tracking-widest text-sm">
              Explore Marketplace
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {selectedCategory && selectedCategory !== "All"
                ? `${selectedCategory} Products`
                : "Fresh Recommendations"}
            </h2>

            <p className="text-gray-500 mt-2">
              Discover amazing deals and find something you love.
            </p>
          </div>

          <button
            onClick={() => navigate("/products")}
            className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
          >
            View All →
          </button>

        </div>

        {/* Product Cards */}
        {filteredProducts.length === 0 ? (

          <div className="text-center py-16 bg-white rounded-2xl">
            <p className="text-5xl mb-4">🔍</p>
            <h3 className="text-xl font-bold text-gray-800">
              No products found!
            </h3>
            <p className="text-gray-500 mt-2">
              Try another search or category.
            </p>

            <button
              onClick={() => {
                navigate("/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              Back to Home
            </button>
          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

            {filteredProducts.map((product) => (

              <div
                key={product.id}
                className="product-card product-animation bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group"
              >

                {/* Product Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="product-image w-full h-56 object-cover"
                  />

                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {product.category}
                  </span>

                  {/* Favourite */}
                  <button
                    onClick={() => onToggleFavorite?.(product.id)}
                    aria-label="Add or remove favourite"
                    className="heart-animation absolute top-3 right-3 bg-white w-10 h-10 rounded-full shadow-md text-xl hover:scale-110 hover:bg-red-50 transition"
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

                  <div className="flex justify-between items-center mt-4 text-sm text-gray-500 gap-2">
                    <span className="truncate">📍 {product.location}</span>
                    <span>{product.date}</span>
                  </div>

                  {/* View Product */}
                  <button
                    onClick={() => navigate(`/product/${product.id}`)}
                    className="animated-button w-full mt-5 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
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