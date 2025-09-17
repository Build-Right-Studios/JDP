import React from "react";
import ProductItem from "../components/Products/ProductItem.jsx";
import products from "../data/products.js";

export default function Spices() {
  const oils = products.filter((p) => p.category === "spices");

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Our Spices</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {oils.map((item) => (
          <ProductItem key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
}
