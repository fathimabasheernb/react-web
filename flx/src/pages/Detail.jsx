import { useLocation, useNavigate } from "react-router-dom";

function Detail() {

  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">

        <h2 className="text-2xl font-bold">
          Product not found!
        </h2>

        <button
          onClick={() => navigate("/")}
          className="mt-5 bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Back to Home
        </button>

      </div>
    );
  }

  return (

    <div className="min-h-screen bg-gray-50 py-12 px-6">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="grid md:grid-cols-2">

          {/* Product Image */}

          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full min-h-80 object-cover"
            />
          </div>

          {/* Product Information */}

          <div className="p-8">

            <span className="text-blue-600 font-semibold">
              {product.category}
            </span>

            <h1 className="text-3xl font-bold text-gray-900 mt-4">
              {product.name}
            </h1>

            <p className="text-3xl font-extrabold text-blue-600 mt-6">
              {product.price}
            </p>

            <div className="mt-6 space-y-4 text-gray-600">

              <p>
                📍 Location: {product.location}
              </p>

              <p>
                📅 Posted: {product.date}
              </p>

              <p>
                Product ID: {product.id}
              </p>

            </div>

            <button
              onClick={() => navigate(-1)}
              className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              ← Back to Products
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}

export default Detail;