import React from 'react';
import bgImage from '../../images/bg.jpg';        // your spices & oils image

function OurStore() {
  return (
    <div className="relative mt-14 overflow-hidden">
      {/* Background Image with Light Opacity */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <h2 className="text-5xl font-extrabold text-center mt-8 mb-8 font-['Poppins']">
          Our Store
        </h2>

        <div className="max-w-md mx-auto px-4">
          <video
            controls
            className="w-full max-h-[60vh] lg:max-h-[80vh] object-contain"
            playsInline
          >
            <source src="/video/pure1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default OurStore;
