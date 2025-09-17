import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);

  const increase = (index) => {
    const newCart = [...cart];
    newCart[index].quantity = (newCart[index].quantity || 1) + 1;
    setCart(newCart);
  };

  const decrease = (index) => {
    const newCart = [...cart];
    if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCart(newCart);
    }
  };

  const remove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const totalCost = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={() => navigate('/products')}>Continue Shopping</button>
      {cart.length === 0 && <p>Your cart is empty</p>}
      {cart.map((item, index) => (
        <div key={index} style={{ border: "1px solid black", padding: "10px" }}>
          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity || 1}</p>
          <button onClick={() => increase(index)}>+</button>
          <button onClick={() => decrease(index)}>-</button>
          <button onClick={() => remove(index)}>Delete</button>
        </div>
      ))}
      <h3>Total: ${totalCost}</h3>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
    </div>
  );
};

export default CartPage;
