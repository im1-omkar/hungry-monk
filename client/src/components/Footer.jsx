import React, { useState } from "react";
import mushroomImg from '../assets/mushroom.png';
import breadImg from '../assets/bread.png';

export default function FooterSection({ onSubscribe, subscribeStatus }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubscribe?.(email);
  };

  return (
    <footer className="relative bg-[#f9fafb] text-gray-800 pt-20 pb-10 overflow-hidden">

      <img src={mushroomImg} alt="mushroom" className="absolute left-0 bottom-0 w-40 opacity-80 animate-float-slow" />
      <img src={breadImg} alt="pizza slice" className="absolute right-0 top-0 w-44 opacity-80 animate-float-slow float-delay" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">
        {/* Logo & Info */}
        <div className="bg-[#e53945] text-white rounded-3xl p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Hungry Monk 🍴</h2>
          <p className="text-sm mb-3">Tuesday – Saturday: 12:00pm – 11:00pm</p>
          <p className="text-sm font-semibold underline mb-3">Closed on Sunday</p>
          <p className="text-sm">5 star rated on Zomato ⭐</p>
        </div>

        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-3 border-b-4 border-yellow-400 inline-block pb-1">About</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-yellow-600 transition">Our Story</a></li>
            <li><a href="#menu" className="hover:text-yellow-600 transition">Special Dishes</a></li>
            <li><a href="#contact" className="hover:text-yellow-600 transition">Reservation</a></li>
            <li><a href="#contact" className="hover:text-yellow-600 transition">Contact Us</a></li>
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-bold mb-3 border-b-4 border-yellow-400 inline-block pb-1">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>Starters</li>
            <li>Burgers</li>
            <li>Mocktails</li>
            <li>BBQ</li>
            <li>Desserts</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-3 border-b-4 border-yellow-400 inline-block pb-1">Newsletter</h3>
          <p className="text-sm mb-3">Get recent updates and offers.</p>

          <form onSubmit={handleSubmit} className="w-full flex items-start">
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 px-4 py-3 text-sm focus:outline-none"
                aria-label="Email address"
              />
              <button type="submit" className="bg-[#e53945] text-white px-5 py-3 text-sm hover:bg-red-600 transition-all">
                Subscribe
              </button>
            </div>
          </form>
          {subscribeStatus?.message && (
            <p className={`mt-2 text-sm ${subscribeStatus.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {subscribeStatus.message}
            </p>
          )}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-yellow-400 mt-10 pt-5 flex flex-col md:flex-row justify-between items-center text-sm px-6 max-w-7xl mx-auto relative z-10">
        <p className="text-gray-600">© 2025 Hungry Monk | All rights reserved 🍜</p>
        <div className="flex gap-5 font-semibold mt-3 md:mt-0">
          <a href="#" className="hover:text-yellow-600 transition">Facebook</a>
          <a href="#" className="hover:text-yellow-600 transition">Instagram</a>
          <a href="#" className="hover:text-yellow-600 transition">Twitter</a>
        </div>
      </div>


      <style>{`
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
        .float-delay {
          animation-delay: 2s;
        }

        /* small responsive tweaks to ensure the floating images don't overlap content */
        @media (max-width: 768px) {
          .animate-float-slow { opacity: 0.6; }
        }
      `}</style>
    </footer>
  );
}
