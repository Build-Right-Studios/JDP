import React from 'react';

// 1. A new, reusable component for each mission list item.
const MissionPoint = ({ text }) => (
  <li className="flex items-start">
    <svg 
      className="h-6 w-6 text-green-600 mr-3 mt-1 flex-shrink-0" 
      fill="currentColor" 
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path 
        fillRule="evenodd" 
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
        clipRule="evenodd" 
      />
    </svg>
    <span className="text-lg text-gray-700">{text}</span>
  </li>
);

// 2. Mission statement data is kept in an array for easy updates.
const missionPoints = [
  "Fostering sustainable growth and green development",
  "Innovating for a sustainable future through technology",
  "Adopting a customer-centric approach in every project",
  "Building stronger, resilient communities for tomorrow"
];

const OurMission = () => {
  return (
    <div className="flex items-center justify-center p-8 bg-gray-100 min-h-screen font-sans">
      <div className="flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-xl p-8 max-w-6xl mx-auto overflow-hidden">
        
        {/* Left Section: Single Image */}
        <div className="w-full lg:w-1/2 p-4">
          <img 
            src="https://placehold.co/600x600/34D399/white?text=Our+Vision" 
            alt="A modern architectural building representing the company's vision" 
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 p-4 lg:pl-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 font-['Poppins']">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed font-sans">
            To provide exceptional construction services that exceed client expectations through innovation, quality craftsmanship, and a commitment to sustainability. We build lasting relationships and create spaces that inspire and enhance communities.
          </p>

          <ul className="space-y-4">
            {/* 3. We now map over the array to generate the list dynamically. */}
            {missionPoints.map((point, index) => (
              <MissionPoint key={index} text={point} />
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default OurMission;