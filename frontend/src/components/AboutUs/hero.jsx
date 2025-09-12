import React from 'react';

const Hero = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="text-white text-7xl font-bold tracking-widest uppercase animate-[flyInAndBreath_4s_ease-in-out_infinite]">
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

        @keyframes flyInAndBreath {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          50% {
            opacity: 1;
            transform: translateY(0) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;
