import React from 'react';
import Logo from '../../assets/agriTradeLogo.png';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* The header section has been removed */}

      {/* Main Content */}
      <main className="max-w-4xl mx-auto py-12 px-4">
        {/* Contact Form Section */}
        <section className="bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Contact Us</h1>
          <p className="text-green-600 mb-8">
            We're here to help! Reach out to us with any questions, feedback, or inquiries. Our team is dedicated to providing you with the best possible support and assistance.
          </p>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="Enter your name" 
                className="w-full mt-1 p-3 border  rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-green-600" 
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                placeholder="Enter your email" 
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-green-600" 
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium">Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="Enter the subject" 
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-green-600" 
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Enter the message" 
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 placeholder-green-600 resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w- py-3 px-6 bg-[#8be75a] text-black font-bold rounded-md hover:bg-green-500 transition-colors"
            >
              Submit
            </button>
          </form>
        </section>

        {/* Additional Contact Information Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Additional Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-green-600">Phone</h3>
              <p className="text-gray-600">+(237) 675318953</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-green-600">Email</h3>
              <p className="text-gray-600">Technovators@agritrade.com</p>
            </div>
            <div className="space-y-2 col-span-2">
              <h3 className="text-lg font-semibold text-green-600">Address</h3>
              <p className="text-gray-600">
                Afayi-Molyko, Buea.<br />
                CMR
              </p>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="mt-12">
          <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-400">
            {/* The image is a placeholder for an embedded map. A real implementation would use an iframe or a mapping library. */}
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ backgroundImage: "url('https://via.placeholder.com/800x600.png?text=Map+Goes+Here')" }}
            >
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;