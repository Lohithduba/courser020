import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increaseItem, decreaseItem, removeItem, clearCart } from "../redux/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalCost = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>
      {items.length === 0 ? <p>No items in cart</p> :
        items.map(item => (
          <div key={item.id} style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
            <img src={item.img} alt={item.name} style={{ width: "100px", marginRight: "10px" }} />
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price} x {item.quantity}</p>
              <button onClick={() => dispatch(increaseItem(item.id))}>+</button>
              <button onClick={() => dispatch(decreaseItem(item.id))}>-</button>
              <button onClick={() => dispatch(removeItem(item.id))}>Delete</button>
            </div>
          </div>
        ))
      }
      <h2>Total Cost: ₹{totalCost}</h2>
      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
};

export default CartPage;
