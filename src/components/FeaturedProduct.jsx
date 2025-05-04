
// import React from 'react'

// import linen from "../assets/linen.jpg"
// import wideleg  from "../assets/wideleg.jpg"
// import tote from "../assets/tote.jpg"
// import watch from "../assets/watch1.jpg"
// import { useCart } from '../context/CartContext.jsx'

// const products = [
//     {
//       id: 1,
//       name: "Linen Shirt",
//       price: 49.99,
//       image: linen,
//     },
//     {
//       id: 2,
//       name: "Wide Leg Pants",
//       price: 59.99,
//       image: wideleg,
//     },
//     {
//       id: 3,
//       name: "Minimalist Watch",
//       price: 199.99,
//       image: watch,
//     },
//     {
//       id: 4,
//       name: "Canvas Tote",
//       price: 29.99,
//       image: tote,
//     },
//   ];
  
//   export default function FeaturedProducts() {

//     const {addToCart } = useCart()

//     return (
//       <section className="py-12 px-6 bg-gray-50">
//         <h2 className="text-2xl font-bold mb-6 text-center">Featured Products</h2>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className="border rounded-xl overflow-hidden group bg-white shadow-sm"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-56 object-cover group-hover:scale-105 transition"
//               />
//               <div className="p-4">
//                 <h3 className="font-semibold text-lg">{product.name}</h3>
//                 <p className="text-gray-700">{product.price}</p>
//                 <div className="mt-2 flex gap-2">
//                   <button
                    
//                      onClick={() => addToCart(product)}
//                    className="text-sm bg-black text-white px-4 py-1 rounded hover:bg-gray-800">
//                     Add to Cart
//                   </button>
//                   <a
//                     href={`/product/${product.id}`}
//                     className="text-sm border px-4 py-1 rounded hover:bg-gray-100"
//                   >
//                     View
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="text-center mt-8">
//           <a
//             href="/products"
//             className="inline-block text-black border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
//           >
//             View All
//           </a>
//         </div>
//       </section>
//     );
//   }
  




























































































import React from "react";
import { Link } from "react-router-dom";
import products from "../data/products"; 
import { useCart } from "../context/CartContext";

export default function FeaturedProducts() {

    const {addToCart} = useCart()
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10 text-center">Featured Products</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="text-gray-600">{product.material}</p>
            <p className="text-lg font-bold mt-2">{product.price}</p>

            <div className="mt-4 flex justify-between items-center">
              <Link
                to={`/product/${product.id}`}
                className="text-sm text-white bg-black px-4 py-2 rounded hover:bg-gray-800"
              >
                View
              </Link>
              <button

                
                onClick={() => addToCart({
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    image: product.mainImage,
                    size: product.sizes[0],
                    color: product.colors[0], 
                    quantity: 1, 
                })}
                className="text-sm px-4 py-2 border border-black rounded hover:bg-black hover:text-white transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

