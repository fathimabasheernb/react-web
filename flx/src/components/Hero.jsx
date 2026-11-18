function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">

      {/* Background Decorations */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-40"></div>

      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

          {/* LEFT CONTENT */}
          <div className="relative z-10">

            <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full text-sm font-semibold mb-6">
              ✨ Your Marketplace, Your Choice
            </span>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">

              Find It.
              <span className="block text-blue-600">
                Love It.
              </span>

              <span className="block">
                Own It.
              </span>

            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-lg">

              Discover amazing deals, explore unique finds, and
              connect with people around you. Buy and sell anything
              with just a few clicks on FLX.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-9">

              <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition duration-300">

                Explore Products →
                
              </button>

              <button className="border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition duration-300">

                + Start Selling

              </button>

            </div>

            {/* Statistics */}
            <div className="flex gap-10 mt-12">

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  10K+
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Products Listed
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  5K+
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Happy Buyers
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-gray-900">
                  100%
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Easy Shopping
                </p>
              </div>

            </div>

          </div>


          {/* RIGHT GRAPHICS */}
          <div className="relative flex justify-center items-center">

            {/* Main Circle */}
            <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center shadow-2xl shadow-blue-200">

              <div className="text-center">

                <div className="text-8xl md:text-9xl">
                  🛍️
                </div>

                <h2 className="text-white text-3xl font-bold mt-5">
                  FLX
                </h2>

                <p className="text-blue-50 mt-2">
                  Everything in one place.
                </p>

              </div>

            </div>


            {/* Floating Product Card 1 */}
            <div className="absolute -top-2 -left-2 md:left-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce">

              <div className="bg-orange-100 p-3 rounded-xl text-3xl">
                📱
              </div>

              <div>
                <h4 className="font-bold text-gray-800">
                  Smartphones
                </h4>

                <p className="text-xs text-gray-500">
                  Great deals await!
                </p>
              </div>

            </div>


            {/* Floating Product Card 2 */}
            <div className="absolute bottom-12 -right-2 md:-right-5 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">

              <div className="bg-green-100 p-3 rounded-xl text-3xl">
                🚗
              </div>

              <div>
                <h4 className="font-bold text-gray-800">
                  Find Your Ride
                </h4>

                <p className="text-xs text-gray-500">
                  Explore nearby listings
                </p>
              </div>

            </div>


            {/* Floating Product Card 3 */}
            <div className="absolute top-1/2 -right-5 md:-right-12 bg-white p-3 rounded-2xl shadow-xl">

              <span className="text-3xl">🎧</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;