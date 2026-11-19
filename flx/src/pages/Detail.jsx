import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import products from "../data/products";

function Detail() {

  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setSelectedImage(0);
  }, [id]);

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

  const images = product.images || [];

  return (

    <div className="min-h-screen bg-gray-100 py-12 px-6">

      <div className="max-w-7xl mx-auto">

        <button
          onClick={() => navigate("/")}
          className="mb-6 text-blue-600 font-semibold"
        >
          ← Back to Marketplace
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE - MAIN PRODUCT */}

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg overflow-hidden">

            <img
              src={images[selectedImage] || images[0]}
              alt={product.name}
              className="w-full h-[450px] object-cover"
            />

            <div className="p-8">

              <span className="text-blue-600 font-semibold">
                {product.category}
              </span>

              <h1 className="text-3xl font-bold mt-3">
                {product.name}
              </h1>

              <p className="text-3xl font-extrabold text-blue-600 mt-5">
                {product.price}
              </p>

              <div className="mt-6 space-y-3 text-gray-600">

                <p>📍 Location: {product.location}</p>

                <p>📅 Posted: {product.date}</p>

                <p>Product ID: {product.id}</p>

              </div>

              <button className="mt-8 w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700">
                Contact Seller
              </button>

            </div>

          </div>


          {/* RIGHT SIDE - PRODUCT IMAGE GALLERY */}

          <div className="bg-white rounded-2xl shadow-lg p-5">

            <h2 className="text-xl font-bold mb-2">
              Product Gallery
            </h2>

            <p className="text-sm text-gray-500 mb-5">
              Explore different views of {product.name}
            </p>

            <div className="product-scroll-box">

              <div className="product-scroll-track">

                {[...images, ...images].map((image, index) => (

                  <div
                    key={index}
                    onClick={() =>
                      setSelectedImage(index % images.length)
                    }
                    className={`mb-4 rounded-xl overflow-hidden cursor-pointer border-4 transition
                      ${selectedImage === index % images.length
                        ? "border-blue-600"
                        : "border-transparent"
                      }`}
                  >

                    <img
                      src={image}
                      alt={`${product.name} view ${(index % images.length) + 1}`}
                      className="w-full h-36 object-cover hover:scale-105 transition duration-300"
                    />

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Detail;