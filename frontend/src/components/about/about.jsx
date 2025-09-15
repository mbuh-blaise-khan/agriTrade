import React from 'react';

import blaiseImage from '../../assets/blaiseImage.jpg';
import ebaneckImage from '../../assets/ebaneckImage.jpg';
import tabitImage from '../../assets/tabitImage.jpg';
import nImage from '../../assets/KTL5.jpeg';

import image from '../../assets/image.png';

const teamMembers = [
    { name: 'Blaise Khan', title: 'CEO', imageUrl: blaiseImage },
    { name: 'Ebaneck Keziah', title: 'Head of Operations', imageUrl: ebaneckImage },
    { name: 'Tabit Briston', title: 'Lead Engineer', imageUrl: tabitImage },
    { name: 'N Syverine', title: 'Marketing Manager', imageUrl: nImage },
];

const About = () => {
    return (
        <div className="bg-white text-gray-800 font-sans">
            {/* Hero Section */}
            <header 
             className="relative bg-no-repeat h-screen flex items-center justify-center font-sans"
  style={{ backgroundImage: `url(${image})`, backgroundPosition: '50% 50%', backgroundSize: '100% 100%' }}
>
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center p-4">
    <div className="text-center text-white">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Connecting Farmers and Sellers
      </h1>
      <p className="mt-4 max-w-2xl text-lg mx-auto">
        AgriTrade is a platform that bridges the gap between farmers and sellers, creating a seamless marketplace for agricultural products.
      </p>
      <button className="mt-8 px-6 py-3 bg-[#8be75a] hover:bg-green-600 text-black font-bold rounded-full">
        Explore Products
      </button>
    </div>
  </div>

            </header>

            <main className="container mx-auto px-4 py-12">
                {/* Mission Section */}
                <section className="text-center py-12">
                    <h2 className=" text-3xl font-bold text-gray-800">Our Mission</h2>
                    <p className="mt-4 max-w-4xl mx-auto text-lg leading-relaxed">
                        At AgriTrade, our mission is to empower farmers and sellers by providing a transparent and efficient platform for trading agricultural goods. We strive to create a community where quality products meet reliable buyers, fostering growth and sustainability in the agricultural sector.
                    </p>
                </section>

                {/* Story Section */}
                <section className="text-center py-12">
                    <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
                    <p className="mt-4 max-w-4xl mx-auto text-lg leading-relaxed">
                        AgriTrade began with a simple idea: to connect local farmers with a wider market. What started as a small initiative has grown into a thriving platform, serving thousands of users across the country. Our journey is driven by a passion for agriculture and a commitment to supporting the livelihoods of those who feed our communities.
                    </p>
                </section>

                {/* Team Section */}
                <section className="text-center py-12">
                    <h2 className="text-3xl font-bold text-gray-800">Meet the Team</h2>
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <img 
                                    src={member.imageUrl} 
                                    alt={member.name} 
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-lg"
                                />
                                <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
                                <p className="text-sm text-green-600">{member.title}</p>
                            </div>
                        ))}
                    </div>
                </section>
                
                {/* Testimonials Section - Left Text, Right Image */}
                <section className="py-12 flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-bold text-gray-800">Testimonials</h2>
                        <h3>Increased Sales and Market Reach</h3>
                        <p className="mt-4 text-lg leading-relaxed">
                         AgriTrade has helped our business grow. We've reached a wider audience and have seen a significant increase in sales. The platform is easy to use and the support team is always helpful.
                        </p>
                        <button className="mt-4 text-green-500 font-semibold hover:underline">Read More</button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <img 
                            src= {ebaneckImage} 
                            alt="Testimonial 1" 
                            className="rounded-lg shadow-lg max-w-100 h-100"
                        />
                    </div>
                </section>

                {/* Trading Section - Left Image, Right Text */}
                <section className="py-12 flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2 flex justify-center order-2 md:order-1">
                        <img 
                            src={tabitImage} 
                            alt="Trading" 
                            className="rounded-lg shadow-lg max-w-100 h-100"
                        />
                    </div>
                    <div className="md:w-1/2 order-1 md:order-2">
                        <h2 className="text-3xl font-bold text-gray-800">Reliable and Efficient Trading</h2>
                        <p className="mt-4 text-lg leading-relaxed">
                            "We highly value the transparency and efficiency of AgriTrade. The platform ensures secure transactions and timely payments, making it a valuable tool for my business."
                        </p>
                        <button className="mt-4 text-green-500 font-semibold hover:underline">Read More</button>
                    </div>
                </section>

                {/* Final Call to Action Section */}
                <section className="text-center py-20 bg-gray-100 rounded-lg shadow-inner mt-12">
                    <h2 className="text-3xl font-bold text-gray-800">Join AgriTrade Today</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">
                        Connect with a vast network of farmers and sellers. Start trading agricultural products with ease and confidence.
                    </p>
                    <button className="mt-8 px-8 py-4 bg-[#8be75a] hover:bg-green-600 text-black font-bold rounded-full shadow-lg transition duration-300">
                        Get Started
                    </button>
                </section>
            </main> 
                </div>
    );
};

export default About;