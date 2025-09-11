import React from 'react';

const GreenBar = () => {
  return (
    <div className="flex items-center justify-center h-24 bg-[#5c8a40] overflow-hidden">
      <div className="flex flex-grow text-white font-bold whitespace-nowrap marquee-container">
        <h1 className="text-2xl font-semibold px-4">Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•</h1>
        <h1 className="text-2xl font-semibold px-4">Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•</h1>
      </div>
      <style jsx>{`
        .marquee-container {
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default GreenBar;
