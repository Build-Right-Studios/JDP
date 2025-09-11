import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex items-center justify-center p-8 bg-gray-100 min-h-screen font-sans">
      <div className="flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-xl p-8 max-w-6xl mx-auto">
        {/* Left Section with Overlapping Images */}
        <div className="relative w-full lg:w-1/2 p-4 mb-8 lg:mb-0">
          {/* Main blueprint image */}
          <div className="w-full h-auto rounded-3xl overflow-hidden">
            <img 
              src="https://placehold.co/600x400/E0E0E0/white?text=Blueprint+and+Tools" 
              alt="Architectural blueprint and tools" 
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          {/* Overlapping small image */}
          <div className="absolute top-1/2 right-4 w-3/4 md:w-1/2 h-auto rounded-3xl shadow-lg transform -translate-y-1/2 z-10">
            <img 
              src="https://placehold.co/400x300/E0E0E0/white?text=Construction+Workers" 
              alt="Construction workers looking at a blueprint" 
              className="w-full h-full object-cover rounded-3xl" 
            />
          </div>
        </div>

        {/* Right Section with Text */}
        <div className="w-full lg:w-1/2 p-4 mt-8 lg:mt-0">
          <h2 className="text-4xl font-extrabold mb-6 font-['Poppins']">Our Mission</h2>
          <p className="text-gray-600 mb-6 font-['sans-serif']">
            To provide exceptional construction services that exceed client expectations through innovation, quality craftsmanship, and a commitment to sustainability. We aim to build lasting relationships and create spaces that enhance communities. We aim to create spaces that inspire and improve the lives of our clients and communities. Through precision, expertise, and a customer-centric approach, we strive to exceed expectations in every project. Our dedication to integrity and excellence drives us to build lasting relationships and a legacy of trust.
          </p>

          <ul className="space-y-4">
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Fostering Sustainable Growth and Green Development</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Innovating for a Sustainable Future</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Customer-Centric Approach</span>
            </li>
            <li className="flex items-start">
              <svg className="h-6 w-6 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Building Stronger Communities</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
