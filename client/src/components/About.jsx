import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="relative group overflow-hidden rounded-2xl shadow-xl">
          <img
            src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/08/paneer-tikka-1200x675.jpg"
            alt="Delicious Food"
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 bg-yellow-400 p-4 rounded-tr-2xl">
            <p className="text-black font-semibold text-lg">We Cook For You</p>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="text-gray-800">
          <h4 className="text-green-500 font-bold text-sm uppercase tracking-wide mb-2">
            About Our Food
          </h4>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            The Best Delicious Food <br /> Made From Us...
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            It’s the perfect dining experience where every dish is crafted with fresh, high-quality ingredients. Experience quick and efficient service that ensures your food is served fresh and full of flavor. At our restaurant, every meal is made with love, care, and the authentic taste of India.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 border-t border-gray-200 pt-6">
            <div>
              
              <p className="text-yellow-500 text-3xl font-bold">250+</p>
              <p className="text-sm font-semibold text-gray-600">Satisfied Clients</p>
            </div>
            <div>
              
              <p className="text-yellow-500 text-3xl font-bold">153+</p>
              <p className="text-sm font-semibold text-gray-600">Total Food Categories</p>
            </div>
            <div>
              
              <p className="text-yellow-500 text-3xl font-bold">25+</p>
              <p className="text-sm font-semibold text-gray-600">Award Wins</p>
            </div>
          </div>

          {/* Foundation Info */}
          <div className="mt-6 flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/706/706195.png"
              alt="Signature"
              className="w-16 h-16 object-contain"
            />
            <div className="bg-black text-white text-sm font-semibold py-2 px-4 rounded-full">
              Foundation, Since <span className="text-yellow-400 font-bold">21st Oct, 2019</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
