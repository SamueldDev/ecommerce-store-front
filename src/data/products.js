
import linen1 from "../assets/linen.jpg";
import linen2 from "../assets/linen2.jpg";
import linen3 from "../assets/linen3.jpg";
import linen4 from "../assets/linen4.jpg";

import wideleg from "../assets/wideleg.jpg"
import wideleg2 from "../assets/wideleg2.jpg"
import wideleg3 from "../assets/wideleg3.jpg"
import wideleg4 from "../assets/wideleg4.jpg"

import tote from "../assets/tote.jpg"
import tote2 from "../assets/tote2.jpg"
import tote3 from "../assets/tote3.jpg"
import tote4 from "../assets/tote4.jpg"

import watch from "../assets/watch1.jpg"
import watch2 from "../assets/watch2.jpg"
import watch3 from "../assets/watch3.jpg"
import watch4 from "../assets/watch4.jpg"


const products = [
  {
    id: 1,
    title: "Linen Shirt",
    description: "A premium-quality linen shirt perfect for warm days.",
    price: 49.99,
    material: "100% Linen",
    mainImage: linen1,
    images: [linen1, linen2, linen3, linen4],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Beige", "Olive"],
    rating: 4.5,
    reviews: [
      { id: 1, author: "Jane D.", text: "Super comfy and stylish!" },
      { id: 2, author: "Mark R.", text: "Quality is top-notch. Will buy again." },
    ],
  },
  {
    id: 2,
    title: "WideLeg Pants",
    description: "Warm and cozy — a wardrobe essential for cool days.",
    price: 59.99,
    material: "80% Cotton, 20% Polyester",
    mainImage: wideleg,
    images: [wideleg, wideleg2, wideleg3, wideleg4],
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["Black", "Gray", "Navy"],
    rating: 4.7,
    reviews: [
      { id: 1, author: "Alex J.", text: "My go-to hoodie every winter!" },
      { id: 2, author: "Sarah K.", text: "Love the quality and warmth." },
    ],
  },
  {
    id: 3,
    title: "Wristwatch",
    description: "Stretchy, soft, and perfect for daily wear.",
    price: 39.99,
    material: "98% Cotton, 2% Spandex",
    mainImage: watch,
    images: [watch, watch2, watch3, watch4],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Navy", "Charcoal"],
    rating: 4.4,
    reviews: [
      { id: 1, author: "Daniel L.", text: "These pants are amazing!" },
      { id: 2, author: "Grace W.", text: "So comfortable and stylish." },
    ],
  },


  {
    id: 4,
    title: "Canvas Tote",
    description: "Stretchy, soft, and perfect for daily wear.",
    price: 39.99,
    material: "98% Cotton, 2% Spandex",
    mainImage: tote,
    images: [tote, tote2, tote3, tote4],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Khaki", "Navy", "Charcoal"],
    rating: 4.4,
    reviews: [
      { id: 1, author: "Daniel L.", text: "These pants are amazing!" },
      { id: 2, author: "Grace W.", text: "So comfortable and stylish." },
    ],
  },
];

export default products;
