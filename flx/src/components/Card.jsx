import { useNavigate } from "react-router-dom";
import products from "../data/products";

function Card({ searchQuery = "" }) {

  const navigate = useNavigate();

  // const products = [
  //   {
  //     id: 1,
  //     name: "Luxury 2BHK Apartment",
  //     category: "Flats & Apartments",
  //     price: "₹45,00,000",
  //     location: "Kochi, Kerala",
  //     date: "Today",
  //     image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600",
  //   },
  //   {
  //     id: 2,
  //     name: "Hyundai Creta 2022",
  //     category: "Cars",
  //     price: "₹12,50,000",
  //     location: "Thrissur, Kerala",
  //     date: "Yesterday",
  //     image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600",
  //   },
  //   {
  //     id: 3,
  //     name: "Royal Enfield Classic 350",
  //     category: "Bikes",
  //     price: "₹1,65,000",
  //     location: "Calicut, Kerala",
  //     date: "Today",
  //     image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=600",
  //   },
  //   {
  //     id: 4,
  //     name: "Toyota Innova Crysta",
  //     category: "Travellers",
  //     price: "₹18,00,000",
  //     location: "Kochi, Kerala",
  //     date: "2 days ago",
  //     image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600",
  //   },
  //   {
  //     id: 5,
  //     name: "iPhone 15 Pro Max",
  //     category: "Mobiles",
  //     price: "₹85,000",
  //     location: "Malappuram, Kerala",
  //     date: "Today",
  //     image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600",
  //   },
  //   {
  //     id: 6,
  //     name: "MacBook Pro M3",
  //     category: "Laptops",
  //     price: "₹1,25,000",
  //     location: "Kochi, Kerala",
  //     date: "Yesterday",
  //     image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
  //   },
  //   {
  //     id: 7,
  //     name: "Modern Luxury Sofa",
  //     category: "Furniture",
  //     price: "₹32,000",
  //     location: "Palakkad, Kerala",
  //     date: "Today",
  //     image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600",
  //   },
  //   {
  //     id: 8,
  //     name: "Premium Smart Watch",
  //     category: "Watches",
  //     price: "₹8,500",
  //     location: "Kannur, Kerala",
  //     date: "3 days ago",
  //     image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
  //   },
  //   {
  //     id: 9,
  //     name: "Canon DSLR Camera",
  //     category: "Cameras",
  //     price: "₹48,000",
  //     location: "Kozhikode, Kerala",
  //     date: "Today",
  //     image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600",
  //   },
  //   {
  //     id: 10,
  //     name: "Double Door Refrigerator",
  //     category: "Appliances",
  //     price: "₹28,000",
  //     location: "Ernakulam, Kerala",
  //     date: "Yesterday",
  //     image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?w=600",
  //   },
  //   {
  //     id: 11,
  //     name: "Modern Gaming Setup",
  //     category: "Gaming",
  //     price: "₹65,000",
  //     location: "Kochi, Kerala",
  //     date: "Today",
  //     image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=600",
  //   },
  //   {
  //     id: 12,
  //     name: "Luxury Dining Table",
  //     category: "Furniture",
  //     price: "₹25,000",
  //     location: "Thrissur, Kerala",
  //     date: "Yesterday",
  //     image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600",
  // },
  // ];

  const filteredProducts = products.filter((product) =>

  product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||

  product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||

  product.location.toLowerCase().includes(searchQuery.toLowerCase())

);

  return (

    <section className="bg-gray-50 py-16 px-6 md:px-12">

      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}

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

                <button className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full shadow-md text-xl hover:text-red-500 transition">
                  ♡
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


                {/* View Button */}

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


        {/* View All Button */}

        <div className="text-center mt-12">

          <button className="border-2 border-blue-600 text-blue-600 px-10 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition duration-300">
            Explore More Products →
          </button>

        </div>

      </div>

    </section>

  );

}

export default Card;