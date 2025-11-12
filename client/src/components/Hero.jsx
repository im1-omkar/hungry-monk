import React from 'react';
import './index.css';
import video from '../assets/video.mp4';

const Hero = () => {
  return (
    <div className="relative h-screen flex flex-col md:flex-row items-center justify-center overflow-hidden">
      {/* 🔥 Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔥 Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-12 lg:px-24">
        <h1 className="roboto-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight mb-4">
          Best Food <br className="hidden sm:block" /> Collection of Nagpur
        </h1>

        <p className="oregano text-lg sm:text-xl md:text-2xl text-white mb-6">
          Exclusive Offer of <span className="text-yellow-300">-30%</span> off this week
        </p>

        <button className="flex items-center justify-center gap-2 bg-[#ff1f4b] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#e61c44] transition duration-300 shadow-lg mb-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5H18m-11 0a1 1 0 100 2 1 1 0 000-2zm11 0a1 1 0 100 2 1 1 0 000-2z" />
          </svg>
          Order Now
        </button>

        {/* 🔥 Subscribe Box */}
        <div className="flex flex-col sm:flex-row items-center bg-white rounded-full overflow-hidden shadow-md w-full max-w-md mx-auto">
          <div className="flex items-center px-4 py-2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75L12 13.5 2.25 6.75m19.5 10.5V6.75a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25z" />
            </svg>
          </div>
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 py-3 px-4 outline-none text-gray-700 placeholder-gray-400 w-full"
          />
          <button className="bg-[#ff1f4b] text-white px-6 py-3 font-medium rounded-full hover:bg-[#e61c44] transition duration-300 w-full sm:w-auto">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
