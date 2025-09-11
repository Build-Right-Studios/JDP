import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-white text-7xl font-bold tracking-widest uppercase">
        <h1 className="text-stroke-2">About Us</h1>
      </div>
      <style jsx>{`
        .text-stroke-2 {
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: white;
          color: transparent;
          font-size: clamp(3rem, 10vw, 7rem);
          line-height: 1;
        }
      `}</style>
    </div>
  );
};

export default Hero;