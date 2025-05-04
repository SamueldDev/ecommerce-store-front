

import React from 'react'
import  { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message sent:", formData);

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="max-w-5xl mx-auto px-4 py-10">
      {/* Slide-in Notification */}
      {showSuccess && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md animate-slideIn z-50">
          📬 Message sent successfully!
        </div>
      )}

      <h1 className="text-3xl font-bold mb-10">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Send Message
          </button>
        </form>

        {/* Store Info */}
        <div className="space-y-4 text-gray-700">
          <h2 className="text-xl font-semibold mb-2">Store Information</h2>
          <p><strong>📞 Phone:</strong> +1 (123) 456-7890</p>
          <p><strong>📧 Email:</strong> support@minimaliststore.com</p>
          <p><strong>🏬 Address:</strong> 123 Modern St, Fashion City, NY 10001</p>
          <div className="mt-4">
            <h3 className="font-semibold">Follow us:</h3>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-blue-500 hover:underline">Instagram</a>
              <a href="#" className="text-blue-500 hover:underline">Twitter</a>
              <a href="#" className="text-blue-500 hover:underline">Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

