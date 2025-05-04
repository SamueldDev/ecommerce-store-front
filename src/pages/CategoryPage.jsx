

// import React from 'react'

// import { useParams } from "react-router-dom";
// import { useState } from "react";

// const dummyProducts = Array.from({ length: 12 }).map((_, i) => ({
//   id: i + 1,
//   name: `Product ${i + 1}`,
//   price: `$${(Math.random() * 100 + 10).toFixed(2)}`,
//   image: `/images/product${(i % 4) + 1}.jpg`, // cycles through product1.jpg - product4.jpg
// }));

// export default function CategoryPage() {
//   const { categoryName } = useParams();
//   const [sortOption, setSortOption] = useState("popularity");

//   return (
//     <main className="px-6 py-8">
//       <h1 className="text-3xl font-bold capitalize mb-6">
//         {categoryName} Collection
//       </h1>

//       {/* Filters */}
//       <div className="flex flex-wrap items-center gap-4 mb-6">
//         <label className="flex items-center gap-2">
//           Sort by:
//           <select
//             value={sortOption}
//             onChange={(e) => setSortOption(e.target.value)}
//             className="border px-3 py-1 rounded"
//           >
//             <option value="popularity">Popularity</option>
//             <option value="price">Price</option>
//             <option value="newest">Newest</option>
//           </select>
//         </label>

//         <select className="border px-3 py-1 rounded">
//           <option>All Sizes</option>
//           <option>S</option>
//           <option>M</option>
//           <option>L</option>
//         </select>

//         <select className="border px-3 py-1 rounded">
//           <option>All Colors</option>
//           <option>Black</option>
//           <option>White</option>
//           <option>Beige</option>
//         </select>

//         <select className="border px-3 py-1 rounded">
//           <option>All Materials</option>
//           <option>Cotton</option>
//           <option>Linen</option>
//           <option>Leather</option>
//         </select>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//         {dummyProducts.map((product) => (
//           <div
//             key={product.id}
//             className="border rounded-xl overflow-hidden group bg-white shadow-sm"
//           >
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-56 object-cover group-hover:scale-105 transition"
//             />
//             <div className="p-4">
//               <h3 className="font-semibold text-lg">{product.name}</h3>
//               <p className="text-gray-700">{product.price}</p>
//               <div className="mt-2 flex gap-2">
//                 <button className="text-sm bg-black text-white px-4 py-1 rounded hover:bg-gray-800">
//                   Add to Cart
//                 </button>
//                 <a
//                   href={`/product/${product.id}`}
//                   className="text-sm border px-4 py-1 rounded hover:bg-gray-100"
//                 >
//                   View
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Pagination */}
//       <div className="mt-10 flex justify-center gap-4">
//         <button className="px-4 py-2 border rounded hover:bg-gray-100">Prev</button>
//         <button className="px-4 py-2 border rounded bg-black text-white">1</button>
//         <button className="px-4 py-2 border rounded hover:bg-gray-100">2</button>
//         <button className="px-4 py-2 border rounded hover:bg-gray-100">3</button>
//         <button className="px-4 py-2 border rounded hover:bg-gray-100">Next</button>
//       </div>
//     </main>
//   );
// }










































import React from 'react';
import { useParams } from "react-router-dom";
import { useState } from "react";
import linen from "../assets/linen.jpg"
import wideleg from "../assets/wideleg.jpg"
import watch from "../assets/watch1.jpg"
import tote from "../assets/tote.jpg"

// Use your actual featured products instead of dummy data
const featuredProducts = [
  {
    id: 1,
    title: "Classic White Tee",
    price: "$29.99",
    mainImage: linen
  },
  {
    id: 2,
    title: "Black Hoodie",
    price: "$49.99",
    mainImage: wideleg,
  },
  {
    id: 3,
    title: "Beige Jacket",
    price: "$89.99",
    mainImage:  watch
  },
  {
    id: 4,
    title: "Light Denim Jeans",
    price: "$59.99",
    mainImage: tote
  },
];

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [sortOption, setSortOption] = useState("popularity");

  return (
    <main className="px-6 py-8">
      <h1 className="text-3xl font-bold capitalize mb-6">
        {categoryName} Collection
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <label className="flex items-center gap-2">
          Sort by:
          <select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            className="border px-3 py-1 rounded"
          >
            <option value="popularity">Popularity</option>
            <option value="price">Price</option>
            <option value="newest">Newest</option>
          </select>
        </label>

        <select className="border px-3 py-1 rounded">
          <option>All Sizes</option>
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>

        <select className="border px-3 py-1 rounded">
          <option>All Colors</option>
          <option>Black</option>
          <option>White</option>
          <option>Beige</option>
        </select>

        <select className="border px-3 py-1 rounded">
          <option>All Materials</option>
          <option>Cotton</option>
          <option>Linen</option>
          <option>Leather</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden group bg-white shadow-sm"
          >
            <img
              src={product.mainImage}
              alt={product.title}
              className="w-full h-56 object-cover group-hover:scale-105 transition"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.title}</h3>
              <p className="text-gray-700">{product.price}</p>
              <div className="mt-2">
                <a
                  href={`/product/${product.id}`}
                  className="text-sm border px-4 py-1 rounded hover:bg-gray-100 inline-block"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
