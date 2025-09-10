import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" bg-green-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-2 py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0.5 text-[8px] leading-tight">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-xs font-bold text-green-700">AgriTrade</h2>
          <p className="mt-0.5">Connecting farmers & buyers.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-0.5">Quick Links</h3>
          <ul className="space-y-0.5">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/products" className="hover:underline">Products</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-0.5">Support</h3>
          <ul className="space-y-0.5">
            <li><Link to="/login" className="hover:underline">Login</Link></li>
            <li><Link to="/signup" className="hover:underline">Sign Up</Link></li>
            <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-0.5">Contact</h3>
          <p>Email: support@agritrade.com</p>
          <p>Phone: +237 699 123 456</p>
          <div className="flex space-x-1 mt-0.5 text-sm">
            <a href="#" className="text-green-700 hover:text-green-900"><i className="fab fa-facebook-square"></i></a>
            <a href="#" className="text-green-700 hover:text-green-900"><i className="fab fa-twitter-square"></i></a>
            <a href="#" className="text-green-700 hover:text-green-900"><i className="fab fa-instagram-square"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-0.5 pt-0.5 text-center text-[10px]">
        &copy; {new Date().getFullYear()} AgriTrade. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
