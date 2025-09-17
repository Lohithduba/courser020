import React from "react";
import { plants } from "./plantsData";
import PlantCard from "./PlantCard";

const ProductList = () => {
  const categories = [...new Set(plants.map(p => p.category))];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Plants</h1>
      {categories.map(cat => (
        <div key={cat}>
          <h2>{cat}</h2>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {plants.filter(p => p.category === cat).map(p => (
              <PlantCard key={p.id} plant={p} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
