// src/pages/Product.jsx
import React from "react";
import { Link } from "react-router-dom";
import ProductItem from "../components/Products/ProductItem.jsx";
import products from "../data/products.js";

// Helper to render section
const ProductSection = ({ title, category, products }) => {
  const previewProducts = products.slice(0, 3); // show only 3 items in preview

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link
          to={`/products/${category}`}
          className="text-green-700 hover:underline"
        >
          View More →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {products.map((item) => (
          <ProductItem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
          />
        ))}
      </div>
    </div>
  );
};

export default function Product() {
  return (
    <div className="p-10 border-t">
      <ProductSection
        title="Oils"
        category="oils"
        products={products.filter((p) => p.category === "oils")}
      />
      <ProductSection
        title="Spices"
        category="spices"
        products={products.filter((p) => p.category === "spices")}
      />
      <ProductSection
        title="Flours"
        category="flours"
        products={products.filter((p) => p.category === "flours")}
      />
      <ProductSection
        title="Ghee"
        category="ghee"
        products={products.filter((p) => p.category === "ghee")}
      />
    </div>
  );
}
