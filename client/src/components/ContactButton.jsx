import React from 'react';

const ContactButton = ({ cartCount = 0, onContactClick, onMenuClick }) => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3 shadow-md rounded-full w-full max-w-xs">
      <div className="relative flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="green"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.5l1.5 12.75A2.25 2.25 0 007.5 18h9a2.25 2.25 0 002.25-2.25L21 6H6"
          />
        </svg>
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold min-w-5 h-5 px-1 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      </div>

      <button
        onClick={onContactClick}
        className="bg-[#ff1f4b] text-white font-bold px-4 py-2 rounded-full hover:bg-[#e61c44] transition duration-300 shadow"
      >
        Contact Us
      </button>

      <div className="text-black md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6"
          onClick={onMenuClick}
          role="button"
          tabIndex={0}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default ContactButton;