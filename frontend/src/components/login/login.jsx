import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-lg border">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-8 text-gray-800">
          Welcome Back to AgriTrade
        </h2>

        {/* Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Username or Email"
            required
            className="w-full bg-[#f5f7f6] border rounded px-4 py-3 text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full bg-[#f5f7f6] border rounded px-4 py-3 text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-green-700 text-base font-medium hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#2db22d] text-white text-lg font-semibold rounded py-3 hover:bg-green-700 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Bottom link */}
        <div className="text-center mt-6 text-lg text-gray-700">
          New to AgriTrade?{" "}
          <Link
            to="/signup"
            className="text-green-700 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
