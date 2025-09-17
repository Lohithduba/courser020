import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartCount = useSelector(state => state.cart.items.length);

  return (
    <header>
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>GreenLeaf Plants</Link>
      <div>
        <Link to="/products" style={{ marginRight: "20px", color: "white" }}>Products</Link>
        <Link to="/cart" style={{ color: "white" }}>Cart ({cartCount})</Link>
      </div>
    </header>
  );
};

export default Header;
