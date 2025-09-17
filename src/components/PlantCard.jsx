import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/cartSlice";

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const isAdded = cartItems.find(item => item.id === plant.id);

  const handleAddToCart = () => {
    dispatch(addItem({ ...plant, quantity: 1 }));
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", textAlign: "center" }}>
      <img src={plant.img} alt={plant.name} style={{ width: "150px", height: "150px" }} />
      <h3>{plant.name}</h3>
      <p>₹{plant.price}</p>
      <button onClick={handleAddToCart} disabled={isAdded}>
        {isAdded ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
};

export default PlantCard;
