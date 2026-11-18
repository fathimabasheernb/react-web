function Footer() {
  return (
    <footer className="bg-gray-950 text-white pt-16 pb-6">

      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Footer Main Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-gray-700">

          {/* Brand */}
          <div>

            <h1 className="text-4xl font-extrabold text-blue-500 tracking-wide">
              FLX<span className="text-white">.</span>
            </h1>

            <p className="text-gray-400 mt-5 leading-relaxed text-sm">
              Your trusted marketplace to discover amazing deals,
              buy your favourite products and sell what you no longer need.
              Everything you need, all in one place.
            </p>

            <div className="flex gap-4 mt-6">

              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                f
              </a>

              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                𝕏
              </a>

              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                ◎
              </a>

              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition">
                in
              </a>

            </div>

          </div>


          {/* Quick Links */}
          <div>

            <h3 className="text-lg font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-400 text-sm">

              <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">About Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Explore Products</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Sell Your Products</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">My Account</a></li>

            </ul>

          </div>


          {/* Categories */}
          <div>

            <h3 className="text-lg font-bold mb-6">
              Popular Categories
            </h3>

            <ul className="space-y-4 text-gray-400 text-sm">

              <li><a href="#" className="hover:text-blue-400 transition">Cars & Vehicles</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Flats & Properties</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Mobiles & Tablets</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Electronics</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Furniture</a></li>

            </ul>

          </div>


          {/* Contact */}
          <div>

            <h3 className="text-lg font-bold mb-6">
              Get In Touch
            </h3>

            <ul className="space-y-4 text-gray-400 text-sm">

              <li>📍 Kerala, India</li>
              <li>✉ support@flx.com</li>
              <li>☎ +91 98765 43210</li>

            </ul>

            <h3 className="text-lg font-bold mt-8 mb-4">
              Subscribe to Newsletter
            </h3>

            <div className="flex bg-gray-800 rounded-lg overflow-hidden">

              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-transparent px-3 py-3 text-sm outline-none text-white min-w-0"
              />

              <button className="bg-blue-600 px-4 hover:bg-blue-700 transition">
                →
              </button>

            </div>

          </div>

        </div>


        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-7 text-sm text-gray-400">

          <p>
            © 2026 FLX Marketplace. All Rights Reserved.
          </p>

          <div className="flex gap-6">

            <a href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              Terms & Conditions
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;