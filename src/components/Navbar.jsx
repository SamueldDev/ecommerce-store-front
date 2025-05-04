
import React from 'react'
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-white flex justify-between items-center p-4 border-b shadow-sm">
      <Link to="/" className="text-2xl font-bold tracking-tight">  🛍️ Atelier Solace</Link>

      <div className="flex items-center gap-6">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/cart" className="relative">
  🛒
         {cart.length > 0 && (
       <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {cart.reduce((sum, item) => sum + item.quantity, 0)}
         </span>
         )}
        </Link>

      </div>
    </nav>
  );
}














