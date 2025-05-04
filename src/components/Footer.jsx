

import React from 'react'


import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        {/* About */}
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <p className="text-sm">
            We offer carefully curated fashion pieces that are minimalist, stylish, and timeless.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            {/* <li><Link to="/shop" className="hover:underline">Shop</Link></li> */}
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/cart" className="hover:underline">Cart</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Twitter</a>
            <a href="#" className="hover:underline">Facebook</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs py-4 border-t bg-white">
        &copy; {new Date().getFullYear()} Atelier Solace. All rights reserved.
      </div>
    </footer>
  );
}
