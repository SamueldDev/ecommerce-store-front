


import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import products from "../data/products";


export default function ProductPage() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  const { addToCart } = useCart(); // ✅ use the cart context
  const navigate = useNavigate();

  const [mainImage, setMainImage] = useState(product?.images[0]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [added, setAdded] = useState(false);

  if (!product) return <div className="p-6">Product not found.</div>;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    console.log("mainImage value before adding to cart:", mainImage);
    console.log("typeof mainImage:", typeof mainImage);
    addToCart({
      id: product.id,
      name: product.title,
      price: product.price,
      image: mainImage,
      size: selectedSize,
      color: selectedColor,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="px-6 py-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
      <div>
        <div className="border rounded-lg overflow-hidden">
          <img
            src={mainImage}
            alt="Main product"
            className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex gap-2 mt-4">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              onClick={() => setMainImage(img)}
              className={`w-20 h-20 object-cover rounded cursor-pointer border ${
                mainImage === img ? "ring-2 ring-black" : ""
              }`}
              alt={`Thumbnail ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
        <p className="text-gray-600 mb-4">{product.material}</p>
        <p className="text-2xl font-semibold mb-4">${product.price}</p>
        <p className="mb-6">{product.description}</p>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Size</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select Size</option>
            {product.sizes.map((size) => (
              <option key={size}>{size}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Color</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="w-full border px-4 py-2 rounded"
          >
            <option value="">Select Color</option>
            {product.colors.map((color) => (
              <option key={color}>{color}</option>
            ))}
          </select>
        </div>

        <div className="flex gap-4 mt-6">
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
          >
            Add to Cart
          </button>
          <button
            onClick={() => {
              handleAddToCart();
              navigate("/checkout");
            }}
            className="border border-black px-6 py-3 rounded hover:bg-black hover:text-white transition"
          >
            Go to Checkout
          </button>
        </div>

        {added && (
            
          
          <p className="mt-4 text-green-600 font-semibold">
            ✅ Added to cart!
          </p>
        )}

        <div className="mt-10 border-t pt-6">
          <h2 className="text-xl font-bold mb-2">
            {product.rating} ★ ({product.reviews.length} reviews)
          </h2>
          <ul className="space-y-4">
            {product.reviews.map((review) => (
              <li key={review.id}>
                <p className="font-semibold">{review.author}</p>
                <p className="text-gray-600 text-sm">{review.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

