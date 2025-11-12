import React from 'react';

export default function Feature() {
  const cards = [
    {
      id: 1,
      badge: 'UP TO SAVE 50% OFF',
      tagline: 'Spicy, Smoky, and Irresistible',
      title: 'Delicious Paneer Tikka',
      buttonText: 'Order Now',
      textColor: 'text-white',
      imageUrl:
        'https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/08/paneer-tikka-1200x675.jpg',
    },
    {
      id: 2,
      badge: 'Creamy Bite, Royal Delight',
      title: 'Classic Butter Chicken',
      subtitle: 'This Weekend Only',
      buttonText: 'Order Now',
      textColor: 'text-white',
      buttonBg: 'bg-yellow-400',
      buttonTextColor: 'text-gray-900',
      imageUrl:
        'https://i.pinimg.com/736x/9c/68/c7/9c68c79023231df3b280f860a1bf3e42.jpg',
    },
    {
      id: 3,
      badge: 'SAVE 54%',
      tagline: 'Crispy, Golden & South Indian Soul',
      title: 'Authentic Masala Dosa',
      buttonText: 'Order Now',
      textColor: 'text-white',
      imageUrl:
        'https://www.cookwithmanali.com/wp-content/uploads/2020/05/Masala-Dosa.jpg',
    },
  ];

  return (
    <div className=" bg-gray-50 p-4 pt-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-[1.02] transition duration-500 h-80"
            >
              {/* Background Image */}
              <img
                src={card.imageUrl}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover brightness-75"
              />

              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="relative z-10 h-full p-5 flex flex-col justify-between">
                <div>
                  {/* Badge */}
                  <div className="flex justify-end mb-2">
                    {card.id === 1 ? (
                      <div className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-md">
                        {card.badge}
                      </div>
                    ) : card.id === 3 ? (
                      <div className="bg-white text-orange-600 w-16 h-16 rounded-full flex items-center justify-center text-[10px] font-extrabold shadow-lg border-2 border-orange-500">
                        <span className="text-center leading-tight">{card.badge}</span>
                      </div>
                    ) : null}
                  </div>

                  {/* Text Content */}
                  <div>
                    {card.tagline && (
                      <p className="text-yellow-400 text-xs font-medium mb-1 [text-shadow:_1px_1px_4px_rgb(0_0_0_/_80%)]">
                        {card.tagline}
                      </p>
                    )}
                    {card.id === 2 && (
                      <p className="text-white text-xs font-medium mb-1 [text-shadow:_1px_1px_4px_rgb(0_0_0_/_80%)]">
                        {card.badge}
                      </p>
                    )}
                    <h2 className={`${card.textColor} text-2xl font-bold mb-1 leading-tight [text-shadow:_2px_2px_6px_rgb(0_0_0_/_90%)]`}>
                      {card.title}
                    </h2>
                    {card.subtitle && (
                      <p className="text-white text-xs font-medium mb-2 [text-shadow:_1px_1px_4px_rgb(0_0_0_/_80%)]">
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                </div>

                {/* Button */}
                <button
                  className={`$${
                    card.buttonBg || 'bg-transparent border-2 border-white'
                  } ${
                    card.buttonTextColor || 'text-white'
                  } px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 hover:scale-105 transition-transform duration-200 w-fit shadow-md backdrop-blur-sm`}
                >
                  {card.id === 2 && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  )}
                  {card.buttonText}
                  <span className="text-lg">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}