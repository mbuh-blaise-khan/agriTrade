import React from 'react';
import react, {useState, useEffect } from 'react';
import { FaSearch, FaShoppingCart, FaHeart } from 'react-icons/fa';


import homepagevideoSrc from '../../assets/homepagevideo.mp4';
import corn from '../../assets/corn.jpg';
import groundnuts from '../../assets/groundnuts.jpg';
import cocoyams from '../../assets/cocoyams.jpg';
import apples from '../../assets/apples.jpg';


const RotatingText = ({ phrases }) => {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds

    return () => clearInterval(interval);
  }, [phrases]);

  useEffect(() => {
    setCurrentPhrase(phrases[index]);
  }, [index, phrases]);

  return <span className="text-white">{currentPhrase}</span>;
};

//container items
const products = [
  {
    id: 1,
    name: 'Crisp Orchard Apples',
    description: 'From local orchards',
    image: apples,
  },
  {
    id: 2,
    name: 'Sweet Fresh Groundnuts',
    description: 'Grown with care',
    image: groundnuts,
  },
  {
    id: 3,
    name: 'Healthy Cocoyams',
    description: 'Harvested sustainably',
    image: cocoyams,
  },
  {
    id: 4,
    name: 'Farm-Fresh Corn',
    description: 'Harvested 2days ago',
    image: corn,
  },
];


            

const Home = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-[#f9fbf8] group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">

        <div className="flex items-center space-x-4 p-4 border-b border-gray-200">
            {/* Search Bar Section */}
            <div className="flex items-center bg-gray-100 rounded-lg flex-grow">
                <input
                    type="text"
                    placeholder="Search for products..."
                    className="p-2 w-full border bg-transparent outline-none text-gray-700 placeholder focus:ring-1"
                />
                <FaSearch className="text-gray-500 mx-3" />
            </div>

            {/* Icons and Checkout Section */}
            <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 cursor-pointer">
                    <FaShoppingCart className=" text-[#8be75a] text-xl" />
                    <span className="text-gray-800">My Cart</span>
                </div>
                <div className="flex items-center space-x-2 cursor-pointer">
                    <FaHeart className="text-[#8be75a] text-xl" />
                    <span className="text-gray-900">Wishlist</span>
                </div>
                <button className="bg-[#8be75a] text-black py-2 px-4 font-bold rounded-lg hover:bg-green-700 transition-colors">
                    Checkout
                </button>
            </div>
            </div>

        {/* Hero Section with Video Background */}
<div className="px-40 flex flex-1 justify-center py-5">
  <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
    <div className="@container">
      <div className="@[480px]:p-4">
        <div className="relative flex min-h-[480px] flex-col gap-6 items-center justify-center p-4 @[480px]:gap-8 @[480px]:rounded-lg overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={homepagevideoSrc} type="video/mp4" />
          </video>
          {/* Overlay to darken video and make text readable */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
          
          {/* Content */}
          <div className="relative flex flex-col gap-2 text-center text-white z-10">
            <h1
  className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]"
>
  <RotatingText 
    phrases={['Connecting Farmers and Buyers Directly', 'Your Marketplace for Fresh Produce', 'AgriTrade: Fair Prices, Direct Connections']}
  />
</h1>
            <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
              AgriTrade bridges the gap between farmers and buyers, ensuring fresh, high-quality produce at fair prices. Join our community today!
            </h2>
          </div>

          <div className="relative flex-wrap gap-3 flex justify-center z-10">
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#8be75a] text-[#131b0e] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-transform duration-300 hover:scale-105"
            >
              <span className="truncate">Browse Products</span>
            </button>
            <button
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#ecf3e8] text-[#131b0e] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] transition-transform duration-300 hover:scale-105"
            >
              <span className="truncate">Become a Farmer</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  

            {/* Fresh Picks Section */}
            <h2 className="text-[#131b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Fresh Picks</h2>
            <div className="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
  <div className="flex items-stretch p-4 gap-3">
    {products.map((product) => (
      <div key={product.id} className="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60 transition-transform duration-300 hover:scale-105 cursor-pointer">
        <div
          className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg flex flex-col"
          style={{ backgroundImage: `url(${product.image})`}}
        ></div>
        <div>
          <p className="text-blackgrey text-base font-medium leading-normal">{product.name}</p>
          <p className="text-green-600 text-sm font-normal leading-normal">{product.description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

            {/* Why Choose AgriTrade Section */}
            <h2 className="text-[#131b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why Choose AgriTrade?</h2>
            <div className="flex flex-col gap-10 px-4 py-10 @container">
              <div className="flex flex-col gap-4">
                <h1 className="text-[#131b0e] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Our Commitment to Quality and Fairness
                </h1>
                <p className="text-[#131b0e] text-base font-normal leading-normal max-w-[720px]">We ensure a transparent and beneficial marketplace for both farmers and buyers.</p>
              </div>
              <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d8e6d1] bg-[#f9fbf8] p-4 flex-col transition-transform duration-300 hover:scale-105">
                  <div className="text-[#131b0e]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M220.2,100l-18-31.18a28,28,0,0,0-47.3-1.92L139.56,40.31a28,28,0,0,0-48.12-.63,28,28,0,0,0-43,34.78l3.34,5.79a28,28,0,0,0-22,41.92l38,65.82a87.46,87.46,0,0,0,53.43,41,88.56,88.56,0,0,0,22.92,3A88,88,0,0,0,220.2,100Zm-6.67,62.63A72,72,0,0,1,81.63,180l-38-65.82a12,12,0,0,1,20.79-12l22,38.1a8,8,0,1,0,13.85-8l-38-65.81a12,12,0,0,1,13.5-17.59,11.9,11.9,0,0,1,7.29,5.59l34,58.89a8,8,0,0,0,13.85-8l-26-45h0a12,12,0,0,1,20.78-12L160,107.78a48.08,48.08,0,0,0-11,61,8,8,0,0,0,13.86-8,32,32,0,0,1,11.71-43.71,8,8,0,0,0,2.93-10.93l-10-17.32a12,12,0,0,1,20.78-12l18,31.18A71.49,71.49,0,0,1,213.53,162.62ZM184.27,29.93a8,8,0,0,1,9.8-5.66c15.91,4.27,29,14.11,36.86,27.73a8,8,0,0,1-13.86,8c-5.72-9.92-15.36-17.12-27.14-20.27A8,8,0,0,1,184.27,29.93ZM80.91,237a8,8,0,0,1-11.24,1.33c-11-8.69-20.11-19.58-28.6-34.28a8,8,0,0,1,13.86-8c7.44,12.88,15.27,22.32,24.65,29.72A8,8,0,0,1,80.91,237Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#131b0e] text-base font-bold leading-tight">Direct Farmer Connection</h2>
                    <p className="text-green-600 text-sm font-normal leading-normal">Connect directly with farmers, eliminating intermediaries and ensuring fair prices.</p>
                  </div>
                </div>
                {/* Other feature cards follow a similar pattern with appropriate icons and text */}
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d8e6d1] bg-[#f9fbf8] p-4 flex-col transition-transform duration-300 hover:scale-105">
                  <div className="text-[#131b0e]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#131b0e] text-base font-bold leading-tight">Quality Assurance</h2>
                    <p className="text-green-600 text-sm font-normal leading-normal">We guarantee the freshness and quality of all products, with strict standards for our farmers.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#d8e6d1] bg-[#f9fbf8] p-4 flex-col transition-transform duration-300 hover:scale-105">
                  <div className="text-[#131b0e]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M152,120H136V56h8a32,32,0,0,1,32,32,8,8,0,0,0,16,0,48.05,48.05,0,0,0-48-48h-8V24a8,8,0,0,0-16,0V40h-8a48,48,0,0,0,0,96h8v64H104a32,32,0,0,1-32-32,8,8,0,0,0-16,0,48.05,48.05,0,0,0,48,48h16v16a8,8,0,0,0,16,0V216h16a48,48,0,0,0,0-96Zm-40,0a32,32,0,0,1,0-64h8v64Zm40,80H136V136h16a32,32,0,0,1,0,64Z"></path>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#131b0e] text-base font-bold leading-tight">Transparent Pricing</h2>
                    <p className="text-green-600 text-sm font-normal leading-normal">Our pricing is transparent, ensuring fair deals for both farmers and buyers.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <h2 className="text-[#131b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">How It Works</h2>
            <div className="grid grid-cols-[40px_1fr] gap-x-2 px-4">
              <div className="flex flex-col items-center gap-1 pt-3 animate-slideInLeft animation-delay-0s">
                <div className="text-[#131b0e]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M247.63,39.89a8,8,0,0,0-7.52-7.52c-51.76-3-93.32,12.74-111.18,42.22-11.8,19.49-11.78,43.16-.16,65.74a71.34,71.34,0,0,0-14.17,27L98.33,151c7.82-16.33,7.52-33.35-1-47.49-13.2-21.79-43.67-33.47-81.5-31.25a8,8,0,0,0-7.52,7.52c-2.23,37.83,9.46,68.3,31.25,81.5A45.82,45.82,0,0,0,63.44,168,54.58,54.58,0,0,0,87,162.33l25,25V216a8,8,0,0,0,16,0V186.51a55.61,55.61,0,0,1,12.27-35,73.91,73.91,0,0,0,33.31,8.4,60.9,60.9,0,0,0,31.83-8.86C234.89,133.21,250.67,91.65,247.63,39.89ZM47.81,147.6C32.47,138.31,23.79,116.32,24,88c28.32-.24,50.31,8.47,59.6,23.81,4.85,8,5.64,17.33,2.46,26.94L61.65,114.34a8,8,0,0,0-11.31,11.31l24.41,24.41C65.14,153.24,55.82,152.45,47.81,147.6Zm149.31-10.22c-13.4,8.11-29.15,8.73-45.15,2l53.69-53.7a8,8,0,0,0-11.31-11.31L140.65,128c-6.76-16-6.15-31.76,2-45.15,13.94-23,47-35.82,89.33-34.83C232.94,90.34,220.14,123.44,197.12,137.38Z"></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#d8e6d1] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 animate-slideInRight animation-delay-0s">
                <p className="text-[#131b0e] text-base font-medium leading-normal">Farmers List Their Products</p>
                <p className="text-green-600 text-base font-normal leading-normal">Farmers showcase their fresh produce with detailed descriptions and images.</p>
              </div>

              <div className="flex flex-col items-center gap-1 animate-slideInLeft animation-delay-0.2s">
                <div className="w-[1.5px] bg-[#d8e6d1] h-2"></div>
                <div className="text-[#131b0e]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                  </svg>
                </div>
                <div className="w-[1.5px] bg-[#d8e6d1] h-2 grow"></div>
              </div>
              <div className="flex flex-1 flex-col py-3 animate-slideInRight animation-delay-0.2s">
                <p className="text-[#131b0e] text-base font-medium leading-normal">Buyers Browse and Purchase</p>
                <p className="text-green-600 text-base font-normal leading-normal">Buyers explore a wide range of products, selecting based on quality, price, and location.</p>
              </div>

              <div className="flex flex-col items-center gap-1 pb-3 animate-slideInLeft animation-delay-0.4s">
                <div className="w-[1.5px] bg-[#d8e6d1] h-2"></div>
                <div className="text-[#131b0e]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H41a32,32,0,0,0,62,0h50a32,32,0,0,0,62,0h17a16,16,0,0,0,16-16V120A7.94,7.94,0,0,0,247.42,117ZM184,88h34.58l9.6,24H184ZM24,72H168v64H24ZM72,208a16,16,0,1,1,16-16A16,16,0,0,1,72,208Zm81-24H103a32,32,0,0,0-62,0H24V152H168v12.31A32.11,32.11,0,0,0,153,184Zm31,24a16,16,0,1,1,16-16A16,16,0,0,1,184,208Zm48-24H215a32.06,32.06,0,0,0-31-24V128h48Z"></path>
                  </svg>
                </div>
              </div>
              <div className="flex flex-1 flex-col py-3 animate-slideInRight animation-delay-0.4s">
                <p className="text-[#131b0e] text-base font-medium leading-normal">Products Delivered Directly</p>
                <p className="text-green-600 text-base font-normal leading-normal">Products are delivered directly from the farm to the buyer, ensuring freshness and reducing transit time.</p>
              </div>
            </div>

            {/* Benefits for Farmers */}
            <h2 className="text-[#131b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Benefits for Farmers</h2>
            <p className="text-[#131b0e] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Expand your market reach and connect directly with buyers seeking high-quality produce. AgriTrade offers a platform to showcase your products, manage your sales, and receive fair compensation for your hard work.
            </p>
            <div className="flex px-4 py-3 justify-start">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#8be75a] text-[#131b0e] text-sm font-bold leading-normal tracking-[0.015em] transition-transform duration-300 hover:scale-105"
              >
                <span className="truncate">Become a Farmer</span>
              </button>
            </div>

            {/* Benefits for Buyers */}
            <h2 className="text-[#131b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Benefits for Buyers</h2>
            <p className="text-[#131b0e] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Access a wide variety of fresh, locally-sourced produce directly from farmers. Enjoy transparent pricing, quality assurance, and the convenience of direct delivery, all while supporting local agriculture.
            </p>
            <div className="flex px-4 py-3 justify-start">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#8be75a] text-[#131b0e] text-sm font-bold leading-normal tracking-[0.015em] transition-transform duration-300 hover:scale-105"
              >
                <span className="truncate">Start Buying Now</span>
              </button>
            </div>

            {/* Community Section */}
            <h2 className="text-[#131b0e] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Hear from Our Community</h2>
            <p className="text-[#131b0e] text-base font-normal leading-normal pb-3 pt-1 px-4">
              Discover how AgriTrade has positively impacted farmers and buyers. Read their stories and experiences on our About Us page.
            </p>
            <div className="flex px-4 py-3 justify-start">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#ecf3e8] text-[#131b0e] text-sm font-bold leading-normal tracking-[0.015em] transition-transform duration-300 hover:scale-105"
              >
                <span className="truncate">Read Full Testimonials</span>
              </button>
            </div>

            {/* Get Started Section */}
            <div className="@container">
              <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
                <div className="flex flex-col gap-2 text-center">
                  <h1 className="text-[#131b0e] tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                    Ready to Get Started?
                  </h1>
                  <p className="text-[#131b0e] text-base font-normal leading-normal max-w-[720px]">
                    Join AgriTrade today and experience the difference of direct farmer-to-buyer connections.
                  </p>
                </div>
                <div className="flex flex-1 justify-center">
                  <div className="flex justify-center">
                    <button
                      className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#8be75a] text-[#131b0e] text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow transition-transform duration-300 hover:scale-105"
                    >
                      <span className="truncate">Sign Up as a Buyer</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;