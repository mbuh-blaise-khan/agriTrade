import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-100 text-gray-800 mt-12">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-700">AgriTrade</h2>
          <p className="mt-2 text-lg">
            Connecting farmers and buyers for a better market experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">About Us</Link>
            </li>
            <li>
              <Link to="/products" className="hover:underline">Products</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Support / Help */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-lg">
            <li>
              <Link to="/login" className="hover:underline">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="hover:underline">Sign Up</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">FAQ</Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-lg">Email: technovators@agritrade.com</p>
          <p className="text-lg mt-1">Phone: +237 677 503 054 / 675318953</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-green-700 text-2xl hover:text-green-900">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#" className="text-green-700 text-2xl hover:text-green-900">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a href="#" className="text-green-700 text-2xl hover:text-green-900">
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-lg">
        &copy; {new Date().getFullYear()} AgriTrade. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
