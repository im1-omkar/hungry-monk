import React from 'react'

const ContactButton = () => {
  return (
        <div className=" flex items-center justify-between bg-white px-6 py-4 shadow-md rounded-lg w-full max-w-sm mr-5">
            {/* Left: Cart Icon + Badge */}
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

                {/* Badge */}
                <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold w-4 h-4 flex items-center justify-center rounded-full">
                0
                </span>
            </div>

            {/* Middle: Contact Us Button */}
            <button className="bg-[#FFC107] text-white font-bold px-6 py-2 rounded-md hover:bg-[#e6ac00] transition duration-300 shadow">
                Contact Us
            </button>

            {/* Right: Menu Icon */}
            <div>
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="black"
                className="w-6 h-6"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 7.5h16.5M3.75 12h16.5m-16.5 4.5h16.5"
                />
                </svg>
            </div>
    </div>

  )
}

export default ContactButton