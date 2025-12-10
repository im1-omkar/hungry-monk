import React, { useMemo, useState } from "react";

export default function MenuSection({ onAddToCart }) {
  const menuItems = [
    { name: "Hungry Monk Special Pizza", price: "₹180.00", desc: "Hand-tossed crust, bursting with smoky cheese and secret sauce magic.", tags: ["veg", "spicy"] },
    { name: "Classic Tandoori Burger", price: "₹210.00", desc: "Juicy flame-grilled patty, spiced Indian-style with our monk-made mayo.", tags: ["chicken", "spicy"] },
    { name: "Loaded Masala Fries", price: "₹160.00", desc: "Golden fries tossed with monk’s masala and cheesy drizzle.", tags: ["veg"] },
    { name: "Butter Chicken Pasta", price: "₹280.00", desc: "Italian pasta meets Indian butter chicken — the cross-culture masterpiece!", tags: ["chicken", "creamy"] },
    { name: "BBQ Monk Wings", price: "₹320.00", desc: "Crispy wings glazed in our signature BBQ Monk sauce — spicy, sweet, smoky!", tags: ["chicken", "bbq"] },
    { name: "Garden Fresh Salad", price: "₹190.00", desc: "Crisp greens, roasted nuts, and zesty monk dressing for a guilt-free bite.", tags: ["veg", "fresh"] }
  ];

  const [filter, setFilter] = useState("all");

  const filtered = useMemo(() => {
    if (filter === "all") return menuItems;
    if (filter === "veg") return menuItems.filter((item) => item.tags.includes("veg"));
    if (filter === "nonveg") return menuItems.filter((item) => item.tags.includes("chicken"));
    return menuItems;
  }, [filter, menuItems]);

  return (
    <section id="menu" className="w-full bg-white py-20 flex flex-col justify-center items-center px-6">
      <div className="text-center mb-8">
        <h3 className="text-green-600 font-semibold tracking-wider uppercase mb-2">About Our Food</h3>
        <h2 className="text-5xl font-extrabold text-gray-900">Trending Food Menu 🍽️</h2>
      </div>

      <div className="flex gap-3 mb-8">
        <button
          className={`px-4 py-2 rounded-full border ${filter === "all" ? "bg-black text-white" : "bg-white text-gray-800"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={`px-4 py-2 rounded-full border ${filter === "veg" ? "bg-black text-white" : "bg-white text-gray-800"}`}
          onClick={() => setFilter("veg")}
        >
          Veg
        </button>
        <button
          className={`px-4 py-2 rounded-full border ${filter === "nonveg" ? "bg-black text-white" : "bg-white text-gray-800"}`}
          onClick={() => setFilter("nonveg")}
        >
          Non-Veg
        </button>
      </div>

      <div className="border border-gray-200 rounded-2xl shadow-sm w-full max-w-5xl px-6 md:px-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item, index) => (
            <div key={index} className="border-b border-dashed border-gray-300 pb-6 space-y-3">
              <div className="flex justify-between items-center">
                <h4 className="font-bold text-lg text-gray-900 uppercase">{item.name}</h4>
                <span className="text-yellow-500 font-semibold text-lg">{item.price}</span>
              </div>
              <p className="text-gray-500 text-sm">{item.desc}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="text-xs px-3 py-1 bg-gray-100 rounded-full text-gray-600 border">
                    {tag}
                  </span>
                ))}
              </div>
              <button
                onClick={onAddToCart}
                className="mt-2 inline-flex items-center gap-2 bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition"
              >
                Add to Cart
                <span className="text-lg">+</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
