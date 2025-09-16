import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f9faf9]">
      <div className="w-full max-w-md bg-white p-10 rounded-xl shadow-lg border border-gray-200">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-8 text-gray-900">
          Welcome Back to <span className="text-green-600">AgriTrade</span>
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Username / Email */}
          <input
            type="text"
            placeholder="Username or Email"
            required
            className="w-full bg-white border border-green-400 rounded-lg px-4 py-3 text-base text-green-700 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Password with toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full bg-white border border-green-400 rounded-lg px-4 py-3 text-base text-green-700 placeholder-green-500 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500 hover:text-green-700"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-red-500 text-sm font-medium hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white text-base font-semibold rounded-lg py-3 hover:bg-green-700 transition duration-200 shadow-sm"
          >
            Login
          </button>
        </form>

        {/* Bottom Links */}
        <div className="text-center mt-6 text-sm">
          <span className="text-gray-700">New to AgriTrade? </span>
          <Link
            to="/signup"
            className="text-red-500 font-medium hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
