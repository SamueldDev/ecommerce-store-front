
import React from 'react'
import men1 from "../assets/men-1.jpg";
import women1 from "../assets/women-1.jpg"
import sales1 from "../assets/sales-1.jpg"
import accessories from "../assets/accessories-1.jpg"


const categories = [
    { name: "Men", image: men1 },
    { name: "Women", image: women1 },
    { name: "Accessories", image: accessories },
    { name: "Sale", image: sales1 },
  ];
  
  export default function FeaturedCategories() {
    return (
      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              href={`/category/${cat.name.toLowerCase()}`}
              key={cat.name}
              className="group"
            >
              <div className="aspect-square overflow-hidden rounded-xl shadow-md">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition"
                />
              </div>
              <p className="mt-2 text-center font-semibold">{cat.name}</p>
            </a>
          ))}
        </div>
      </section>
    );
  }
  