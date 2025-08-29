// components/Navbar.jsx
import React, { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#deccb6] text-[#6d3c1f] p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Jain Desi & Pure</div>

        
        <div className="hidden md:flex space-x-8 items-center font-semibold">
          <a href="#" className="hover:text-black">
            HOME
          </a>
          <a href="#" className="hover:text-black">
            PRODUCTS
          </a>
          <a href="#" className="hover:text-black">
            ABOUT US
          </a>
          <a href="#" className="hover:text-black">
            CONTACT US
          </a>
          <FaSearch className="cursor-pointer hover:text-black" />
        </div>

        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <FaBars className="w-7 h-7 text-[#6d3c1f]" />
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className="flex flex-col space-y-4 items-center font-semibold">
            <a href="#" className="hover:text-black">
              HOME
            </a>
            <a href="#" className="hover:text-black">
              PRODUCTS
            </a>
            <a href="#" className="hover:text-black">
              ABOUT US
            </a>
            <a href="#" className="hover:text-black">
              CONTACT US
            </a>
            <FaSearch className="cursor-pointer hover:text-black" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
