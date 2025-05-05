

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const [billing, setBilling] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "card",
    discount: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5.99;
  const tax = subtotal * 0.07;
  const total = subtotal + tax + shipping;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBilling((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    const orderDetails = {
      name: billing.name,
      orderNumber: Math.floor(Math.random() * 100000),
      items: cart,
      estimatedDelivery: "2025-05-10",
    };

    navigate("/order-confirmation", { state: { orderDetails } });

    setBilling({
      name: "",
      email: "",
      address: "",
      phone: "",
      paymentMethod: "card",
      discount: "",
    });
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-lg shadow-md animate-slideIn z-50">
          ✅ Order completed successfully!
        </div>
      )}

      <h1 className="text-3xl font-bold mb-8">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-2">Billing Info</h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={billing.name}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={billing.email}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="address"
            placeholder="Shipping Address"
            value={billing.address}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={billing.phone}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            required
          />

          <div className="mt-4">
            <label className="block mb-1">Payment Method</label>
            <select
              name="paymentMethod"
              value={billing.paymentMethod}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
            </select>
          </div>

          <input
            type="text"
            name="discount"
            placeholder="Discount Code (Optional)"
            value={billing.discount}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded mt-4"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <ul className="space-y-2">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between">
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <div className="border-t pt-4 space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Tax (7%)</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-black text-base">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 mt-6"
          >
            Complete Purchase
          </button>
        </div>
      </form>
    </main>
  );
}
