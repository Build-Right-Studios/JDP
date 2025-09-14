import React from 'react';

const OilPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Our Oil Products</h1>
        <p className="text-lg text-gray-600 mb-8">
          Explore our wide range of high-quality oils, perfect for cooking, wellness, and more.
        </p>
        
        {/* You can replace this with a dynamic list of oil products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Virgin Coconut Oil</h2>
            <p className="text-gray-500">Pure, cold-pressed oil with a rich aroma.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Extra Virgin Olive Oil</h2>
            <p className="text-gray-500">Smooth and flavorful, ideal for salads and dressings.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Sesame Oil</h2>
            <p className="text-gray-500">Toasted nutty flavor for Asian-inspired dishes.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OilPage;