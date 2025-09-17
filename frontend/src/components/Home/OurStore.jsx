import React from 'react';
import bgImage from '../../images/bg.jpg';

function OurStore() {
  const youtubeVideoId = "AZ9oBudeHLU";
  
  // YouTube embed with autoplay and additional parameters
  const embedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?` +
    `autoplay=1&` +          // Enable autoplay
    `mute=1&` +             // Must be muted for autoplay to work
    `loop=1&` +             // Loop the video
    `playlist=${youtubeVideoId}&` + // Required for loop to work
    `controls=1&` +         // Show controls
    `showinfo=0&` +         // Hide video info
    `rel=0&` +              // Don't show related videos
    `modestbranding=1&` +   // Minimal YouTube branding
    `start=0`;              // Start from beginning

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
          {/* Note for users */}
          <p className="text-center text-sm text-gray-600 mb-4">
            Video will autoplay muted. Click to unmute and enjoy full audio.
          </p>
          
          {/* YouTube Embed with Autoplay */}
          <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
              src={embedUrl}
              title="Our Store Video"
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