import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        background: "url('https://source.unsplash.com/1600x900/?plants') center/cover",
        height: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <h1>GreenLeaf Plants</h1>
      <p>We bring nature to your home with the best houseplants!</p>
      <button
        style={{ marginTop: "20px", padding: "10px 20px", fontSize: "16px" }}
        onClick={() => navigate("/products")}
      >
        Get Started
      </button>
    </div>
  );
};

export default LandingPage;
