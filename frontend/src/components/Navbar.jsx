import React, { useState } from 'react'
import { RiMenu3Fill } from "react-icons/ri";
import wcise_logo from '../images/jdp_logo.jpg';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="overflow-x-hidden"> {/* Prevents extra horizontal scroll */}
            {/* Navbar Desktop & Mobile Toggle */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6">
                    
                    {/* Logo Section */}
                    <div className='flex flex-row items-center'>
                        <Link to='/'><img src={wcise_logo} alt="WCISE Logo" className='h-16 w-auto px-2' /></Link>
                        <h2 className='font-medium text-xl lg:text-2xl poppins-semibold'>JAIN DESI AND PURE</h2>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:block mr-2'>
                        <ul className='flex items-center gap-6 text-gray-700 font-medium text-lg'>
                            <NavLink to="/" className="relative inline-block py-1 px-1 text-gray-800 font-semibold group">
                                <span className="relative z-10 group-hover:text-[#d2a01d] transition">HOME</span>
                                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#d2a01d] transition-all duration-300 group-hover:w-full rounded"></span>
                            </NavLink>
                            <NavLink to="/about" className="relative inline-block py-1 px-1 text-gray-800 font-semibold group">
                                <span className="relative z-10 group-hover:text-[#d2a01d] transition">ABOUT US</span>
                                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#d2a01d] transition-all duration-300 group-hover:w-full rounded"></span>
                            </NavLink>
                             <NavLink to="/product" className="relative inline-block py-1 px-1 text-gray-800 font-semibold group">
                                <span className="relative z-10 group-hover:text-[#d2a01d] transition">PRODUCTS</span>
                                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#d2a01d] transition-all duration-300 group-hover:w-full rounded"></span>
                            </NavLink>
                            <NavLink to="/contact" className="relative inline-block py-1 px-1 text-gray-800 font-semibold group">
                                <span className="relative z-10 group-hover:text-[#d2a01d] transition">CONTACT US</span>
                                <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-[#d2a01d] transition-all duration-300 group-hover:w-full rounded"></span>
                            </NavLink>
                            <NavLink to='/' className="inline-block px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded hover:bg-[#d2a01d] hover:text-white transition">
                                ORDER NOW
                            </NavLink>
                        </ul>
                    </div>

                    {/* Mobile Icon */}
                    <div className='md:hidden' onClick={() => setOpen(!open)}>
                        <RiMenu3Fill className='text-3xl' />
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            {open && (
                <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-50 flex flex-col gap-4 px-6 py-8 shadow-lg overflow-x-hidden">
                    <button
                        className="self-end text-2xl mb-4"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </button>
                    <NavLink to="/" onClick={() => setOpen(false)} className="text-gray-800 font-medium py-2 border-b hover:text-blue-500 transition">HOME</NavLink>
                    <NavLink to="/about" onClick={() => setOpen(false)} className="text-gray-800 font-medium py-2 border-b hover:text-blue-500 transition">ABOUT US</NavLink>
                    <NavLink to="/contact" onClick={() => setOpen(false)} className="text-gray-800 font-medium py-2 border-b hover:text-blue-500 transition">CONTACT US</NavLink>
                    <NavLink to="/" onClick={() => setOpen(false)} className="inline-block w-fit px-4 py-2 mt-2 bg-gray-200 text-gray-800 font-semibold rounded hover:bg-blue-500 hover:text-white transition">ORDER NOW</NavLink>
                </div>
            )}
        </div>
    );
}

export default Navbar;
