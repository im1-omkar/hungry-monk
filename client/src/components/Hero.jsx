import React from 'react'
import './index.css'


const Hero = () => {
  return (
    <div className="bg-[url('../assets/bgImg.png')] bg-cover bg-center h-120 flex flex-row">
      <div className="flex-2 flex flex-col justify-center items-center">
        <div >
          
          <div className="roboto-bold text-6xl text-white flex-1 flex flex-row jusitfy-center items-center mt-30">
            Best Food <br /> Collection of Nagpur
          </div>
          <div className="oregano text-2xl">
            <span className="text-white">Exclusive Offer of </span> <span className="text-yellow-300">-30%</span> <span className="text-white">off this week</span>
          </div>

          <div className="w-full flex-1  mt-5">
          <button className="flex items-center gap-2 bg-[#ff1f4b] text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#e61c44] transition duration-300 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.3 5H18m-11 0a1 1 0 100 2 1 1 0 000-2zm11 0a1 1 0 100 2 1 1 0 000-2z" />
              </svg>
              Order Now
          </button>
          <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md w-full max-w-md mt-10">
                <div className="flex items-center px-4 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75L12 13.5 2.25 6.75m19.5 10.5V6.75a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25z" />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 py-3 pr-4 outline-none text-gray-700 placeholder-gray-400"
                />
                <button className="bg-[#ff1f4b] text-white px-6 py-3 font-medium rounded-full hover:bg-[#e61c44] transition duration-300">
                  Subscribe
                </button>
              </div>
          </div>
        </div>
        
      </div>
      <div className="flex-1 flex flex-row justify-center items-center">Image</div>
    </div>
  )
}

export default Hero