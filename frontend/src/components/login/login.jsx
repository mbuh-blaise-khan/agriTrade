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
            className="w-full  border rounded px-4 py-3 text-lg placeholder:text-green-600 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Password"
            required
            className="w-full border rounded px-4 py-3 text-lg placeholder:text-green-600 focus:outline-none focus:ring-1 focus:ring-green-500"
          />

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-green-600 text-base font-medium hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-[#8be75a] text-black-grey text-lg font-bold rounded py-3 hover:bg-green-600 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Bottom link */}
        <div className="text-center mt-6 text-lg text-gray-700">
          New to AgriTrade?{" "}
          <Link
            to="/signup"
            className="text-green-600 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
