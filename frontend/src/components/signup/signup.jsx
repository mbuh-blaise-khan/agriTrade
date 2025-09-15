import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false); // toggle password visibility

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-lg bg-white p-12 rounded-lg shadow-lg border">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-8 text-gray-800">
          Join AgriTrade
        </h2>

        {/* Form */}
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full bg-[#f0f7f1] border rounded px-4 py-3 text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="w-full bg-[#f0f7f1] border rounded px-4 py-3 text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
          />

          {/* Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              required
              className="w-full bg-[#f0f7f1] border rounded px-4 py-3 text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600 font-semibold text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password"
              required
              className="w-full bg-[#f0f7f1] border rounded px-4 py-3 text-lg placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600 font-semibold text-sm"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>

          {/* Farmer / Buyer checkboxes */}
          <div className="flex space-x-6 text-lg">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="role"
                value="farmer"
                required
                className="w-5 h-5 text-green-600"
              />
              <span>Farmer</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="role"
                value="buyer"
                required
                className="w-5 h-5 text-green-600"
              />
              <span>Buyer</span>
            </label>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[#8be75a] text-black text-lg font-bold rounded py-3 hover:bg-green-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {/* Bottom link */}
        <div className="text-center mt-6 text-lg text-gray-700">
          Already have an account?{" "}
          <Link to="/login" className="text-green-700 font-semibold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
