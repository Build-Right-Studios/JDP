import React from 'react';
import bgImage from '../../images/bg.jpg';

function OurStore() {
  const shortVideoId = "PqngLfyGp_8";

  const embedUrl = `https://www.youtube.com/embed/${shortVideoId}?` +
    `autoplay=0&mute=0&loop=1&playlist=${shortVideoId}&controls=1&rel=0&modestbranding=1&start=0`;

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

        <div className="max-w-3xl mx-auto px-4 mb-4 lg:w-[30vw]">

          {/* Responsive YouTube Embed */}
          <div 
            className="relative w-full" 
            style={{ 
              paddingTop: '177.78%', // vertical 9:16 aspect ratio
              maxHeight: 'clamp(300px, 10vh, 600px)' // min 400px, max 900px, scales with viewport
            }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src={embedUrl}
              title="Our Store Shorts Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurStore;
