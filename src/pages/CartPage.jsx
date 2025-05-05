



import React from 'react'

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { cart } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center gap-4 border p-4 rounded">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-medium">{item.name}</h3>
                  <p>${item.price.toFixed(2)}</p>
                  <p>Qty: {item.quantity}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-right text-lg font-semibold">
            Subtotal: ${subtotal.toFixed(2)}
          </div>
          <div className="mt-6 text-right">
            <a
                href="/checkout"
                className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
            >
                Proceed to Checkout
            </a>
            </div>

        </>
      )}
    </main>
  );
}

