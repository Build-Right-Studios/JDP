import React from 'react';
import jdp_logo from '../images/jdp_logo.jpg'
import { Link, NavLink } from 'react-router-dom';
import { FaEnvelope, FaInstagram, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-gray-800 py-12 mt-12 rounded-xl shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo and Socials */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0 w-full md:w-1/4">
            <Link to='/'><img src={jdp_logo} alt="Company Logo" className="h-26 w-auto px-2 mb-4 rounded-full" /></Link>
            <h2 className='font-medium text-xl lg:text-2xl poppins-semibold'>JAIN DESI AND PURE</h2>
          </div>

          {/* Links Sections */}
          <div className="flex flex-wrap justify-between w-full md:w-3/4">
            <div className="mb-8 md:mb-0 w-1/2 sm:w-1/3 lg:w-1/4">
              <h4 className="text-lg font-bold mb-4 font-['Poppins']">BROWSE BY CATEGORY</h4>
              <ul className="space-y-2 text-md text-gray-600 font-['sans-serif']">
                <Link to='/products/oils'><li><a className="hover:text-gray-900">OIL</a></li></Link>
                <Link to='/products/ghee'><li><a className="hover:text-gray-900">GHEE</a></li></Link>
                <Link to='/products/spices'><li><a className="hover:text-gray-900">SPICES</a></li></Link>
                <Link to='/products/flours'><li><a className="hover:text-gray-900">FLOUR</a></li></Link>
              </ul>
            </div>

            <div className="w-1/2 sm:w-1/3 lg:w-1/4">
              <h4 className="text-lg font-bold mb-4 font-['Poppins']">INFORMATION</h4>
              <ul className="space-y-2 text-md text-gray-600 font-['sans-serif']">
                <Link to='/about'><li><a className="hover:text-gray-900">ABOUT US</a></li></Link>
                <Link to='/contact'><li><a className="hover:text-gray-900">CONTACT US</a></li></Link>
                <Link to='/about#faq'><li><a className="hover:text-gray-900">FAQ</a></li></Link>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        {/* Contact and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-6 mb-4 md:mb-0 text-gray-700">
            {/* Email */}
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-lg text-[#CD9B63]" />
              <span>jaindesiandpure@gmail.com</span>
            </div>

            {/* Instagram */}
            <div className="flex items-center space-x-2">
              <a
                href="https://instagram.com/jaindesiandpure" // 🔗 replace with your Instagram
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-pink-500"
              >
                <FaInstagram className="text-lg text-[#CD9B63]" />
                <span>JAIN DESI AND PURE</span>
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-lg text-[#CD9B63]" />
              <span>+91-96677 95721</span>
            </div>
          </div>

          <div className="text-xs">
            Build Right Now © 2025. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
