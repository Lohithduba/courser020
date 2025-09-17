import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ProductPage from './components/ProductPage';
import CartPage from './components/CartPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
}

export default App;
