import React from "react";

export default function MenuSection() {
  const menuItems = [
    { name: "Hungry Monk Special Pizza", price: "₹180.00", desc: "Hand-tossed crust, bursting with smoky cheese and secret sauce magic." },
    { name: "Classic Tandoori Burger", price: "₹210.00", desc: "Juicy flame-grilled patty, spiced Indian-style with our monk-made mayo." },
    { name: "Loaded Masala Fries", price: "₹160.00", desc: "Golden fries tossed with monk’s masala and cheesy drizzle." },
    { name: "Butter Chicken Pasta", price: "₹280.00", desc: "Italian pasta meets Indian butter chicken — the cross-culture masterpiece!" },
    { name: "BBQ Monk Wings", price: "₹320.00", desc: "Crispy wings glazed in our signature BBQ Monk sauce — spicy, sweet, smoky!" },
    { name: "Garden Fresh Salad", price: "₹190.00", desc: "Crisp greens, roasted nuts, and zesty monk dressing for a guilt-free bite." }
  ];

  return (
    <section className="w-full bg-white py-20 flex flex-col justify-center items-center px-6">
      <div className="text-center mb-12">
        <h3 className="text-green-600 font-semibold tracking-wider uppercase mb-2">About Our Food</h3>
        <h2 className="text-5xl font-extrabold text-gray-900">Trending Food Menu 🍽️</h2>
      </div>

      <div className="border border-gray-200 rounded-2xl shadow-sm w-full max-w-5xl px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-dashed border-gray-300 pb-6">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-lg text-gray-900 uppercase">{item.name}</h4>
                <span className="text-yellow-500 font-semibold text-lg">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
