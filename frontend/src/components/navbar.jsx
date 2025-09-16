// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa";
import { MdAgriculture } from "react-icons/md";
import Logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // determine active tab based on current path
  const isActive = (path) =>
    location.pathname === path
      ? "bg-green-600 text-white font-semibold"
      : "text-gray-800";

  return (
    <header className="sticky top-0 w-full bg-[#f9fbf8] shadow-md z-50 border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="AgriTrade logo" className="w-10 h-10" />
          <div className="leading-none">
            <span className="block text-green-700 font-extrabold text-xl tracking-tight">
              Agri
            </span>
            <span className="block text-red-500 font-semibold text-sm -mt-0.5">
              Trade
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium items-center">
          <Link
            to="/"
            className={`px-3 py-2 rounded-lg transition hover:bg-green-500 hover:text-white ${isActive(
              "/"
            )}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`px-3 py-2 rounded-lg transition hover:bg-green-500 hover:text-white ${isActive(
              "/about"
            )}`}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className={`px-3 py-2 rounded-lg transition hover:bg-green-500 hover:text-white ${isActive(
              "/products"
            )}`}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className={`px-3 py-2 rounded-lg transition hover:bg-green-500 hover:text-white ${isActive(
              "/contact"
            )}`}
          >
            Contact
          </Link>

          {/* Icons Section */}
          <div className="flex items-center space-x-5 ml-6">
            <Link to="/products" className="relative">
              <FaHeart className="text-green-600 text-lg hover:scale-110 transition-transform" />
            </Link>
            <Link to="/products" className="relative">
              <FaShoppingCart className="text-green-600 text-lg hover:scale-110 transition-transform" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1 rounded-full">
                2
              </span>
            </Link>
            <Link to="/login">
              <FaUser className="text-green-600 text-lg hover:scale-110 transition-transform" />
            </Link>
          </div>

          {/* CTA Buttons */}
          <Link
            to="/login"
            className={`px-5 py-2 rounded-lg text-sm font-bold bg-[#8be75a] text-[#131b0e] hover:bg-green-600 hover:text-white transition ${isActive(
              "/login"
            )}`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            className={`px-5 py-2 rounded-lg text-sm font-bold bg-[#8be75a] text-[#131b0e] hover:bg-green-600 hover:text-white transition ${isActive(
              "/signup"
            )}`}
          >
            Sign Up
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-3 px-6 pb-6 text-gray-800 text-base font-medium bg-[#f9fbf8] border-t border-gray-200">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`px-3 py-2 rounded-lg transition hover:bg-green-500 hover:text-white ${isActive(
              "/"
            )}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`px-3 py-2 rounded-lg transition hover:bg-green-500 hover:text-white ${isActive(
              "/about"
            )}`}
          >
            About Us
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className={`px-3 py-2 rounded-lg transition hover:bg-green-500 hover:text-white ${isActive(
              "/products"
            )}`}
          >
            Products
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`px-3 py-2 rounded-lg transition hover:bg-green-500 hover:text-white ${isActive(
              "/contact"
            )}`}
          >
            Contact
          </Link>
          <Link
            to="/wishlist"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2"
          >
            <FaHeart className="text-green-600" />
            <span>Wishlist</span>
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="flex items-center space-x-2"
          >
            <FaShoppingCart className="text-green-600" />
            <span>My Cart</span>
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg font-bold bg-[#8be75a] text-[#131b0e] hover:bg-green-600 hover:text-white transition"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg font-bold bg-[#8be75a] text-[#131b0e] hover:bg-green-600 hover:text-white transition"
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
