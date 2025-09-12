import React from "react";
import { Link } from "react-router-dom"; // if using React Router

const CategoryCard = ({ image, label, link }) => {
  return (
    <div className="relative group h-90 overflow-hidden cursor-pointer">
      <img
        src={image}
        alt={label}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-[#8B4000]/70 flex flex-col items-center justify-center text-white text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition duration-300">
        <h2 className="text-5xl lg:text-6xl mb-4 poppins-medium lg:poppins-semibold">{label}</h2>

        <Link to={link} className="bg-white text-[#8B4000] px-6 py-2 rounded">
            <span className="text-xl">Shop Now</span>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
