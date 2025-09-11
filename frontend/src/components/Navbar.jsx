import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#deccb6] text-[#6d3c1f] h-25 py-6 px-6 shadow-xl sticky top-0 z-50 items-center">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold">Jain Desi & Pure</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center font-semibold">
          <Link to="/" className="hover:text-black text-lg">HOME</Link>
          <Link to="/shop/oil" className="hover:text-black text-lg">PRODUCTS</Link>
          <Link to="/shop/spices" className="hover:text-black text-lg">ABOUT US</Link>
          <Link to="/contact" className="hover:text-black text-lg">CONTACT US</Link>
          <FaSearch className="cursor-pointer hover:text-black " />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FaBars className="w-z h-7 text-[#6d3c1f]" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4 items-center font-semibold">
            <Link to="/" className="hover:text-black">HOME</Link>
            <Link to="/shop/oil" className="hover:text-black">PRODUCTS</Link>
            <Link to="/shop/spices" className="hover:text-black">ABOUT US</Link>
            <Link to="/contact" className="hover:text-black">CONTACT US</Link>
            <FaSearch className="cursor-pointer hover:text-black" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
