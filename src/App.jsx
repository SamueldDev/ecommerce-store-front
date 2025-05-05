
import React from 'react'
import './App.css'

import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './pages/NotFound';


export default function App() {
  return (

    <BrowserRouter>
        <div  className="flex flex-col min-h-screen">

      <Navbar />
      <main className="flex-grow">
      <Routes>
      
        <Route path="/" element={<Home />} />
      
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        
        <Route path="/product/:productId" element={<ProductPage />} />

        <Route path="/cart" element={<CartPage />} />

      <Route path="/checkout" element={<CheckoutPage />} />

      <Route path="/order-confirmation" element={<OrderConfirmationPage />} />

      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<NotFound />} />
        
      </Routes>
      </main>

      <Footer />
      </div>
    </BrowserRouter>
   
  );
}
