import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from '../assets/logo.png';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // determine active tab based on current path
  const isActive = (path) =>
    location.pathname === path ? "bg-green-600 text-white" : "";

  return (
    <header className="sticky top-0 w-full bg-green-100 shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-0">
          <img
            src={Logo}
            alt="AgriTrade logo"
            className="w-10 h-10"
          />
          <div className="text-sm leading-none">
            <span className="block text-green-700 font-bold text-lg">Agri</span>
            <span className="block text-red-500 font-semibold text-sm -mt-0.5">
              Trade
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex space-x-4 text-gray-800 text-sm font-medium">
          <Link
            to="/"
            className={`px-3 py-1 rounded-md transition hover:bg-green-500 hover:text-white ${isActive("/")}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`px-3 py-1 rounded-md transition hover:bg-green-500 hover:text-white ${isActive("/about")}`}
          >
            AboutUs
          </Link>
          <Link
            to="/products"
            className={`px-3 py-1 rounded-md transition hover:bg-green-500 hover:text-white ${isActive("/products")}`}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className={`px-3 py-1 rounded-md transition hover:bg-green-500 hover:text-white ${isActive("/contact")}`}
          >
            Contact
          </Link>

          {/* Highlighted Login */}
          <Link
            to="/login"
            className={`px-5 py-2 rounded-md text-lg font-bold transition hover:bg-green-700 hover:text-white ${isActive("/login")}`}
          >
            Login
          </Link>

          {/* Highlighted SignUp */}
          <Link
            to="/signup"
            className={`px-5 py-2 rounded-md text-lg font-bold transition hover:bg-green-700 hover:text-white ${isActive("/signup")}`}
          >
            Sign Up
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden text-gray-800 focus:outline-none"
        >
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="sm:hidden flex flex-col space-y-2 px-6 pb-3 text-gray-800 text-sm font-medium">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={`px-3 py-2 rounded-md transition hover:bg-green-500 hover:text-white ${isActive("/")}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className={`px-3 py-2 rounded-md transition hover:bg-green-500 hover:text-white ${isActive("/about")}`}
          >
            About Us
          </Link>
          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className={`px-3 py-2 rounded-md transition hover:bg-green-500 hover:text-white ${isActive("/products")}`}
          >
            Products
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={`px-3 py-2 rounded-md transition hover:bg-green-500 hover:text-white ${isActive("/contact")}`}
          >
            Contact
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className={`px-5 py-2 rounded-md text-lg font-bold transition hover:bg-green-700 hover:text-white ${isActive("/login")}`}
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className={`px-5 py-2 rounded-md text-lg font-bold transition hover:bg-green-700 hover:text-white ${isActive("/signup")}`}
          >
            Sign Up
          </Link>
        </div>
      )}
    </header>
  );
}

export default Navbar;
