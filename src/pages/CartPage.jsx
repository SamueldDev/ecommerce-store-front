


// import linen from "../assets/linen.jpg"
// import leather from "../assets/leather.jpg"
// import { useState } from "react";
// import { Link } from "react-router-dom";

// const initialCart = [
//   {
//     id: 1,
//     name: "Linen Shirt",
//     price: 49.99,
//     quantity: 2,
//     image: linen
//   },
//   {
//     id: 2,
//     name: "Leather Tote",
//     price: 89.99,
//     quantity: 1,
//     image: leather
//   },
// ];

// export default function CartPage() {
//   const [cartItems, setCartItems] = useState(initialCart);

//   const updateQuantity = (id, newQty) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === id ? { ...item, quantity: newQty } : item
//       )
//     );
//   };

//   const removeItem = (id) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   const subtotal = cartItems.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   return (
//     <main className="max-w-5xl mx-auto px-4 py-10">
//       <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

//       {cartItems.length === 0 ? (
//         <p className="text-gray-500">Your cart is empty.</p>
//       ) : (
//         <>
//           <div className="space-y-6">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between border-b pb-4"
//               >
//                 <div className="flex items-center gap-4">
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-20 h-20 object-cover rounded"
//                   />
//                   <div>
//                     <h2 className="text-lg font-semibold">{item.name}</h2>
//                     <p className="text-gray-500">${item.price.toFixed(2)}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-4">
//                   <input
//                     type="number"
//                     min="1"
//                     value={item.quantity}
//                     onChange={(e) =>
//                       updateQuantity(item.id, parseInt(e.target.value) || 1)
//                     }
//                     className="w-16 border px-2 py-1 rounded"
//                   />
//                   <button
//                     onClick={() => removeItem(item.id)}
//                     className="text-red-500 hover:underline"
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Totals and Actions */}
//           <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
//             <div className="text-xl font-semibold">
//               Subtotal: ${subtotal.toFixed(2)}
//             </div>
//             <div className="flex gap-4">
//               <Link
//                 to="/checkout"
//                 className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
//               >
//                 Checkout
//               </Link>
//               <Link
//                 to="/"
//                 className="border px-6 py-3 rounded hover:bg-gray-100"
//               >
//                 Continue Shopping
//               </Link>
//             </div>
//           </div>
//         </>
//       )}
//     </main>
//   );
// }






































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

