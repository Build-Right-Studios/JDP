import React, { useState } from "react";
import { useParams } from "react-router-dom";
import GeneralInfo from "../components/Products/GeneralInfo";
import FeatureSection from "../components/Products/FeatureSection";
import products from "../data/products.js";

function ProductData() {
  const { productId } = useParams();
  const product = products.find((p) => p._id.toString() === productId);

  const [mainImage, setMainImage] = useState(product?.images[0]);

  if (!product) {
    return <div className="p-10 text-center text-xl">Product not found</div>;
  }

  return (
    <div className="p-6 md:p-12 flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col lg:flex-row gap-4 w-full lg:w-1/2">
          {/* Main Image */}
          <div className="flex-1">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex lg:flex-col gap-3 mt-3 lg:mt-0 overflow-x-auto lg:overflow-visible">
            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={product.name}
                className={`w-24 h-24 object-cover border cursor-pointer rounded-md ${
                  mainImage === img ? "border-[#5c8a40] border-2" : "border-gray-300"
                }`}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right side: Product details */}
        <div className="flex-1">
          <h1 className="text-3xl lg:text-6xl md:text-4xl font-bold mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <span className="text-yellow-500 text-xl">
              {"★".repeat(product.rating)}{""}
              {"☆".repeat(5 - product.rating)}
            </span>
            <span className="ml-2 text-gray-600 text-lg">({product.reviews})</span>
          </div>

          {/* Price */}
          {/* <p className="text-3xl font-bold text-[#5c8a40] mb-6">{product.price}</p> */}

          {/* Description */}
          <p className="text-gray-600 text-md mt-6 mb-8 lg:w-[80%] text-justify lg:text-left">{product.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nemo iusto odio odit, fuga enim minima mollitia, eos repellat nulla dignissimos consectetur? Quam ut deleniti ipsam quisquam mollitia adipisci quas porro amet hic alias pariatur ipsa facilis tempora vero cumque asperiores, eum unde reprehenderit animi praesentium nesciunt. Minima, quaerat excepturi? </p>

          {/* Add to Cart Button */}
          <button className="px-8 cursor-pointer py-4 text-lg bg-[#5c8a40] text-white font-semibold rounded-md hover:bg-[#476d31]">
            Order With Us
          </button>

          {/* Extra Info */}
          {/* <div className="mt-8 text-gray-700 text-base space-y-2">
            <p>✅ 100% Original Product</p>
            <p>✅ Cash On Delivery Available</p>
          </div> */}
        </div>
      </div>

      {/* General Info */}
      <br />
      <br />
      <FeatureSection />
      <GeneralInfo />
    </div>
  );
}

export default ProductData;
