import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/home/home';
import About from './components/about/about';
import Product from './components/product/product';
import Contact from './components/contact/contact';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Product />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>

  );
}

export default App;
