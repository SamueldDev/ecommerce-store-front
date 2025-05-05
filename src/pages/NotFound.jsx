

import React from 'react'

import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center px-4">
      <h1 className="text-7xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
      >
        Go Back Home
      </Link>
    </main>
  );
}
