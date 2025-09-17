import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const products = [
  { id: 1, name: "Fiddle Leaf Fig", price: 25, category: "Indoor" },
  { id: 2, name: "Snake Plant", price: 15, category: "Indoor" },
  { id: 3, name: "Monstera", price: 30, category: "Indoor" },
  { id: 4, name: "Rose", price: 10, category: "Outdoor" },
  { id: 5, name: "Tulip", price: 12, category: "Outdoor" },
  { id: 6, name: "Bamboo Palm", price: 20, category: "Indoor" },
];

const ProductPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Products</h2>
      <button onClick={() => navigate('/cart')}>Go to Cart ({cart.length})</button>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {products.map(p => (
          <div key={p.id} style={{ border: "1px solid black", padding: "10px" }}>
            <h3>{p.name}</h3>
            <p>Price: ${p.price}</p>
            <p>Category: {p.category}</p>
            <button onClick={() => addToCart(p)} disabled={cart.includes(p)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
