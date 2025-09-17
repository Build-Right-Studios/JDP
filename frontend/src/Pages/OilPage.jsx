import React from "react";
import ProductItem from "../components/Products/ProductItem.jsx";
import products from "../data/products.js";

export default function OilPage() {
  const oils = products.filter((p) => p.category === "oils");

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Our Oils</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {oils.map((item) => (
          <ProductItem key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
}
