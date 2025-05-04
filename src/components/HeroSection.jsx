

import React from 'react'
import fashionbanner from "../assets/fashionbanner.jpg"

export default function HeroSection() {
    
    return (
      <section className="relative bg-gray-100 h-[80vh] flex items-center justify-center text-center px-6">

        <img
          src= {fashionbanner}
          alt="Fashion Banner"
          className="absolute inset-0 object-cover w-full h-full z-0 opacity-70"
        />
        <div className="relative z-10 max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Effortless Style. Maximum Impact.
          </h1>
          <div className="space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
              Shop Now
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-200 transition">
              Browse Collections
            </button>
          </div>
        </div>
      </section>
    );
  }
  