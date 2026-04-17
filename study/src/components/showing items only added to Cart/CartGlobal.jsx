import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components for cart/Navbar';
import ProductList from './components for cart/ProductList';
import Cart from './pages/Cart';

const CartGlobal = () => {const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

 return (
    <div className="min-h-screen bg-gray-50">

      <Navbar cartCount={cartItems.length} />

      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>

    </div>
  );
};

export default CartGlobal
