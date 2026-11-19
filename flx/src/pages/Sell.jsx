import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Sell() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    location: "",
    description: ""
  });

  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);

  // Generate image previews
  useEffect(() => {
    const imageUrls = images.map((image) =>
      URL.createObjectURL(image)
    );

    setPreviews(imageUrls);

    return () => {
      imageUrls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [images]);

  // Handle text inputs
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const selectedImages = Array.from(e.target.files);

    const validImages = selectedImages.filter((image) =>
      image.type.startsWith("image/")
    );

    if (validImages.length !== selectedImages.length) {
      alert("Please select valid image files only.");
    }

    setImages((previousImages) => [
      ...previousImages,
      ...validImages
    ]);

    e.target.value = "";
  };

  // Remove selected image
  const removeImage = (index) => {
    setImages((previousImages) =>
      previousImages.filter((_, i) => i !== index)
    );
  };

  // Submit product
  const handleSubmit = (e) => {
    e.preventDefault();

    if (images.length === 0) {
      alert("Please upload at least one product image.");
      return;
    }

    const newProduct = {
      ...product,
      images: images,
      id: Date.now(),
      date: "Today"
    };

    console.log("New Product:", newProduct);

    alert("Product details submitted successfully!");

    setProduct({
      name: "",
      category: "",
      price: "",
      location: "",
      description: ""
    });

    setImages([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 py-12 px-5">

      <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-xl">

        {/* Back Button */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="text-blue-600 font-semibold hover:underline mb-6"
        >
          ← Back to Home
        </button>

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Sell Your Product
        </h1>

        <p className="text-gray-500 mt-2">
          Add your product details and images to reach more buyers.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">

          {/* Product Name */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Product Name
            </label>

            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Category
            </label>

            <select
              name="category"
              value={product.category}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            >
              <option value="">Select a category</option>
              <option value="Cars">Cars</option>
              <option value="Mobiles">Mobiles</option>
              <option value="Electronics">Electronics</option>
              <option value="Fashion">Fashion</option>
              <option value="Furniture">Furniture</option>
              <option value="Flats & Apartments">Properties</option>
            </select>
          </div>

          {/* Price */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Price (₹)
            </label>

            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Enter product price"
              min="1"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Location
            </label>

            <input
              type="text"
              name="location"
              value={product.location}
              onChange={handleChange}
              placeholder="Enter your location"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Product Description
            </label>

            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              placeholder="Describe your product..."
              rows="4"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 resize-none"
              required
            />
          </div>

          {/* Image Upload Section */}
          <div>

            <label className="block font-semibold text-gray-700 mb-3">
              Upload Product Images
            </label>

            <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-400 rounded-2xl p-8 bg-blue-50 hover:bg-blue-100 hover:border-blue-600 transition cursor-pointer">

              <span className="text-5xl mb-3">📸</span>

              <span className="text-blue-700 font-bold text-lg">
                Click to upload images
              </span>

              <span className="text-gray-500 text-sm mt-2">
                PNG, JPG, JPEG or WEBP
              </span>

              <span className="text-gray-400 text-xs mt-1">
                You can select multiple images
              </span>

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageUpload}
                className="hidden"
              />

            </label>

            {/* Image Count */}
            <p className="text-sm text-gray-500 mt-3">
              {images.length} image(s) selected
            </p>

            {/* Image Preview */}
            {previews.length > 0 && (

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-5">

                {previews.map((preview, index) => (

                  <div
                    key={index}
                    className="relative group rounded-xl overflow-hidden shadow-md"
                  >

                    <img
                      src={preview}
                      alt={`Product preview ${index + 1}`}
                      className="w-full h-32 object-cover group-hover:scale-110 transition duration-300"
                    />

                    {/* Remove Image */}
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      aria-label={`Remove image ${index + 1}`}
                      className="absolute top-2 right-2 bg-red-600 text-white w-7 h-7 rounded-full hover:bg-red-700 transition"
                    >
                      ×
                    </button>

                    <span className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs text-center py-1">
                      Image {index + 1}
                    </span>

                  </div>

                ))}

              </div>

            )}

          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="animated-button w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700"
          >
            Submit Listing →
          </button>

        </form>

      </div>
    </div>
  );
}

export default Sell;