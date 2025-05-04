

import React from 'react'


import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const OrderConfirmationPage = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {}; 

  if (!orderDetails) {
    return <p className="text-center">No order details available.</p>;
  }

  const { name, orderNumber, items, estimatedDelivery } = orderDetails;

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8">Order Confirmation</h1>

      {/* Thank You Message */}
      <div className="bg-green-100 p-6 rounded-lg mb-8 shadow-md">
        <h2 className="text-xl font-semibold text-green-600">
          Thank you for your order, {name}!
        </h2>
        <p className="text-gray-600">Your order is being processed.</p>
      </div>

      {/* Order Details */}
      <div className="space-y-4 mb-8">
        <h3 className="text-lg font-semibold">Order Number: {orderNumber}</h3>
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id} className="flex justify-between">
              <span>{item.name} × {item.quantity}</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between font-semibold mt-4">
          <span>Estimated Delivery Date</span>
          <span>{estimatedDelivery}</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Continue Shopping
        </Link>

      </div>
    </main>
  );
};

export default OrderConfirmationPage;
