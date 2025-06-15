import React from "react";

export default function AboutUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 mt-20">
      <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
        {/* Main Content */}
        <div className="space-y-8">
          <h1 className="text-4xl font-light text-gray-800 mb-8 text-center">
            About Quick Deals
          </h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              At Quick Deals, we redefine the real estate experience by combining speed, luxury, and smart investments. 
              Specializing in high-end properties in Somabay, Gouna, and Sahl Hasheesh, we connect discerning buyers 
              with exclusive villas, beachfront retreats, and premium developments.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-light text-gray-800 mb-6">
              Why Choose Quick Deals?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-green-600">✅</span> Luxury Real Estate Experts
                </h3>
                <p className="text-gray-600">
                  We specialize in elite coastal properties, offering you only the finest homes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-green-600">✅</span> Fast & Seamless Transactions
                </h3>
                <p className="text-gray-600">
                  Time is valuable, and we ensure every deal is smooth, transparent, and efficient.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-green-600">✅</span> Exclusive Listings
                </h3>
                <p className="text-gray-600">
                  Gain access to off-market properties and premium investment opportunities.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-3 flex items-center gap-2">
                  <span className="text-green-600">✅</span> Trusted Network
                </h3>
                <p className="text-gray-600">
                  With a strong network of developers, brokers, and investors, we bring you the best deals first.
                </p>
              </div>
            </div>
          </div>

          {/* Investment Section */}
          <div className="mt-12 bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-light text-gray-800 mb-4">
              Your Smartest Investment Starts Here
            </h2>
            <p className="text-gray-600 mb-6">
              Whether you're searching for a dream home by the sea or a high-return investment, 
              Quick Deals is your trusted partner in the luxury real estate market.
            </p>
            <div className="text-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>📩</span> Get in Touch Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 