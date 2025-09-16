import React, { useState } from "react";
import { ShoppingCart, Star, Heart, X } from "lucide-react"; // X for remove icon

// --- Your image assets (adjust paths as needed) ---
import carrot from '../../assets/produce/carrot.avif';
import cassava from '../../assets/produce/cassava.avif';
import cocoa from '../../assets/produce/cocoa.webp';
import coconut from '../../assets/produce/coconut.avif';
import corn from '../../assets/produce/corn.avif';
import irish_potato from '../../assets/produce/irish_potatoes.avif';
import plantain from '../../assets/produce/plantains.avif';
import tomatoes from '../../assets/produce/tomatoes.avif';
import cabbage from '../../assets/produce/cabbages.avif';
import apple from '../../assets/produce/apples.avif';
import cocoyam from '../../assets/produce/cocoyam.jpg';
import leeks from '../../assets/produce/leeks.avif';
import pineapple from '../../assets/produce/pineapple.avif';
import pawpaw from '../../assets/produce/pawpaw.avif';
import rice from '../../assets/produce/rice.avif';
import sweet_potato from '../../assets/produce/sweet_potatoes.avif';
import celery from '../../assets/produce/celery.avif';
import banana from '../../assets/produce/banana.avif';
import onions from '../../assets/produce/onion.avif';
import cucumber from '../../assets/produce/cucumber.webp';

const ALL_PRODUCTS = [
  {
    id: 1,
    name: "Tomatoes",
    unit: "kg",
    price: 700, // XAF per kg (approx.)
    image: tomatoes,
    stock: 50,
    rating: 4.2,
    fresh: true,
  },
  {
    id: 2,
    name: "Fresh Apples",
    unit: "kg",
    price: 1500,
    image: apple,
    stock: 40,
    rating: 4.8,
    fresh: true,
  },
  {
    id: 3,
    name: "Irish Potatoes",
    unit: "kg",
    price: 1000,
    image: irish_potato,
    stock: 60,
    rating: 4.7,
    fresh: true,
  },
  {
    id: 4,
    name: "Cassava",
    unit: "kg",
    price: 800,
    image: cassava,
    stock: 100,
    rating: 4.0,
    fresh: true,
  },
  {
    id: 5,
    name: "Cocoyams",
    unit: "kg",
    price: 1200,
    image: cocoyam,
    stock: 70,
    rating: 4.3,
    fresh: true,
  },
  {
    id: 6,
    name: "Plantains",
    unit: "bunch",
    price: 2500,
    image: plantain,
    stock: 30,
    rating: 4.6,
    fresh: true,
  },
  {
    id: 7,
    name: "Bananas",
    unit: "bunch",
    price: 2000,
    image: banana,
    stock: 80,
    rating: 4.5,
    fresh: true,
  },
  {
    id: 8,
    name: "Carrots",
    unit: "kg",
    price: 900,
    image: carrot,
    stock: 60,
    rating: 4.2,
    fresh: true,
  },
  {
    id: 9,
    name: "Onions",
    unit: "kg",
    price: 800,
    image: onions,
    stock: 90,
    rating: 4.4,
    fresh: true,
  },
  {
    id: 10,
    name: "Cabbages",
    unit: "head",
    price: 1200,
    image: cabbage,
    stock: 50,
    rating: 4.6,
    fresh: true,
  },
  {
    id: 11,
    name: "Leeks",
    unit: "kg",
    price: 1100,
    image: leeks,
    stock: 40,
    rating: 4.3,
    fresh: true,
  },
  {
    id: 12,
    name: "Cocoa",
    unit: "kg",
    price: 4500,
    image: cocoa,
    stock: 100,
    rating: 4.2,
    fresh: false,
  },
  {
    id: 13,
    name: "Coconut",
    unit: "piece",
    price: 1500,
    image: coconut,
    stock: 30,
    rating: 4.1,
    fresh: false,
  },
  {
    id: 14,
    name: "Corn",
    unit: "kg",
    price: 700,
    image: corn,
    stock: 80,
    rating: 4.3,
    fresh: true,
  },
  {
    id: 15,
    name: "Pineapple",
    unit: "piece",
    price: 2500,
    image: pineapple,
    stock: 25,
    rating: 4.5,
    fresh: true,
  },
  {
    id: 16,
    name: "Pawpaw",
    unit: "piece",
    price: 2000,
    image: pawpaw,
    stock: 25,
    rating: 4.4,
    fresh: true,
  },
  {
    id: 17,
    name: "Rice",
    unit: "kg",
    price: 2000,
    image: rice,
    stock: 200,
    rating: 4.0,
    fresh: false,
  },
  {
    id: 18,
    name: "Sweet Potatoes",
    unit: "kg",
    price: 1200,
    image: sweet_potato,
    stock: 50,
    rating: 4.2,
    fresh: true,
  },
  {
    id: 19,
    name: "Celery",
    unit: "bunch",
    price: 800,
    image: celery,
    stock: 30,
    rating: 4.0,
    fresh: true,
  },
  {
    id: 20,
    name: "Cucumber",
    unit: "piece",
    price: 600,
    image: cucumber,
    stock: 80,
    rating: 4.3,
    fresh: true,
  },
];

function StarRating({ rating }) {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);
  return (
    <div className="flex items-center gap-1">
      {stars.map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= Math.round(rating)
              ? "text-yellow-500 fill-yellow-500"
              : "text-gray-300"
          }`}
        />
      ))}
      <span className="text-sm text-gray-600">({rating.toFixed(1)})</span>
    </div>
  );
}

function ProductCard({ product, onAddToCart, onToggleLike, liked }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-3 hover:shadow-lg transition flex flex-col">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover rounded-lg"
        />
        {product.fresh ? (
          <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-lg">
            Fresh
          </span>
        ) : (
          <span className="absolute top-2 left-2 bg-gray-500 text-white text-xs px-2 py-1 rounded-lg">
            Non-fresh
          </span>
        )}
        <button
          onClick={() => onToggleLike(product.id)}
          className="absolute top-2 right-2 p-1 rounded-full bg-white shadow hover:scale-110 transition"
        >
          <Heart
            className={`h-5 w-5 ${
              liked ? "text-red-500 fill-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>
      <h3 className="text-base font-semibold text-green-900 mt-2">
        {product.name}
      </h3>
      <p className="text-sm text-green-700">
        {product.price.toLocaleString()} FCFA / {product.unit}
      </p>
      <StarRating rating={product.rating} />
      <p className="text-xs text-gray-500">
        {product.stock > 0
          ? `${product.stock} in stock`
          : "Out of stock"}
      </p>
      <button
        disabled={product.stock === 0}
        onClick={() => {
          onAddToCart(product);
          alert(`${product.name} added to cart`);
        }}
        className={`mt-3 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition
          ${
            product.stock > 0
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
      >
        <ShoppingCart size={16} />
        {product.stock > 0 ? "Add to Cart" : "Sold Out"}
      </button>
    </div>
  );
}

function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search fresh produce..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full bg-green-50 border border-green-200 rounded-lg px-4 py-3 placeholder-green-700 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
}

function ProductSkeleton() {
  return (
    <div className="bg-white shadow-md rounded-xl p-3 flex flex-col animate-pulse">
      <div className="w-full h-40 bg-gray-200 rounded-lg"></div>
      <div className="h-4 bg-gray-200 rounded mt-3 w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded mt-2 w-1/2"></div>
      <div className="h-3 bg-gray-200 rounded mt-2 w-1/3"></div>
      <div className="mt-3 h-8 bg-gray-200 rounded-lg w-full"></div>
    </div>
  );
}


export default function ProductPage() {
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [likes, setLikes] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const handleToggleLike = (id) =>
    setLikes((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );

  const filterProducts = (products) =>
    products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase())
    );

  const handleBuy = () => {
    if (!isLoggedIn) {
      alert("Please login or create an account before buying.");
      // redirect to login/signup
    } else {
      alert("Proceeding to delivery & payment");
      // redirect to checkout
    }
  };

  const visibleProducts = filterProducts(ALL_PRODUCTS).slice(0, visibleCount);

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  
const [loading, setLoading] = useState(false);

const handleSeeMore = () => {
  if (visibleCount < filterProducts(ALL_PRODUCTS).length) {
    setVisibleCount((prev) => prev + 4);
  } else {
    // show skeletons for 2 seconds then stop
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }
};



  return (
    <div className="min-h-screen bg-gray-50 px-4 py-6 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-green-900">🌿 AgriMarket Cameroon</h1>
          <p className="text-sm text-gray-600 max-w-lg">
            Fresh produce you can trust — locally grown, fairly priced, and delivered fresh. Your marketplace for real farm produce in Cameroon.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {/* Cart icon with count */}
          <button className="relative">
            <ShoppingCart className="h-6 w-6 text-green-700" />
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1 rounded-full">
                {cart.length}
              </span>
            )}
          </button>
          {/* Buy Now */}
          <button
            onClick={handleBuy}
            className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700"
          >
            Buy Now
          </button>
        </div>
      </header>

      {/* Why Fresh Produce Section */}
      <section className="mb-8 text-center md:text-left px-4 md:px-0">
        <h2 className="text-lg font-semibold text-green-900 mb-2">
          Why Fresh Farm Produce from Cameroon?
        </h2>
        <p className="text-sm text-gray-700 max-w-2xl">
          Eating fresh means more nutrients, better taste, and less risk. At AgriMarket, we source directly from farmers across Cameroon — ensuring fair value, transparency, and freshness. 
          From the fields of the West, Littoral, and Centre regions to your plate in Douala or Yaoundé, every piece of produce is inspected, handled carefully, and delivered while still fresh.
        </p>
      </section>

      {/* Search Bar */}
      <div className="mb-6 px-4 md:px-0">
        <SearchBar search={search} setSearch={setSearch} />
      </div>

      {/* Products Grid */}
      <section>
        <h2 className="text-lg font-semibold text-green-900 mb-4 px-4 md:px-0">
          Available Products
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleLike={handleToggleLike}
              liked={likes.includes(product.id)}
            />
          ))}
        </div>
        {visibleCount < filterProducts(ALL_PRODUCTS).length ? (
        <div className="flex justify-center mt-6">
            <button
            onClick={handleSeeMore}
            className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700"
            >
            See More Products
            </button>
        </div>
        ) : (
        loading && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
            {[...Array(4)].map((_, i) => (
                <ProductSkeleton key={i} />
            ))}
            </div>
        )
        )}
      </section>

      {/* Cart Details (modal or section) */}
      {cart.length > 0 && (
        <section className="mt-10 bg-white p-4 rounded-lg shadow-lg max-w-md mx-auto">
          <h2 className="text-lg font-semibold text-green-900 mb-2">Your Cart</h2>
          <ul className="divide-y divide-gray-200">
            {cart.map((item, idx) => (
              <li key={idx} className="flex justify-between items-center py-2">
                <div>
                  <span className="font-medium text-green-900">{item.name}</span>{" "}
                  <span className="text-sm text-gray-600">({item.unit})</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-green-900">
                    {item.price.toLocaleString()} FCFA
                  </span>
                  <button
                    onClick={() => removeFromCart(idx)}
                    className="text-gray-500 hover:text-red-600 focus:outline-none"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
