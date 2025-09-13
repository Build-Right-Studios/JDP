import React from 'react';

const GreenBar = () => {
  return (
    <div className="flex items-center justify-center h-24 bg-[#5c8a40] overflow-hidden">
      <div className="flex flex-grow text-white font-bold whitespace-nowrap marquee-container">
        {/* We now use a single h1 element with the text repeated. */}
        <h1 className="text-2xl font-semibold px-4 marquee-text">
          Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•
        </h1>
        {/* The second h1 element is now a duplicate of the first for a seamless loop. */}
        <h1 className="text-2xl font-semibold px-4 marquee-text">
          Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•
        </h1>
      </div>
      <style jsx>{`
        .marquee-container {
          /* Use a container that can hold the two elements side by side. */
          display: flex;
          animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
          /* The animation now moves the full width of the text element. */
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default GreenBar;