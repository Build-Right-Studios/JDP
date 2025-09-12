import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-amber-900 leading-tight">
                Essential Oil Bottles
              </h1>
              <h2 className="text-2xl lg:text-3xl font-medium text-amber-800">
                Whole Sale in Custom Packaging
              </h2>
            </div>
            
            <button className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore More
            </button>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-amber-700"></div>
                <span className="text-base lg:text-lg text-amber-800 font-medium">1500+ Products Sold</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-amber-700"></div>
                <span className="text-base lg:text-lg text-amber-800 font-medium">1500+ Products Sold</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-amber-700"></div>
                <span className="text-base lg:text-lg text-amber-800 font-medium">1500 + Products Sold</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 rounded-full bg-amber-700"></div>
                <span className="text-base lg:text-lg text-amber-800 font-medium">1500 + Products Sold</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative z-10 max-w-md lg:max-w-lg">
              <img 
                src="oil.png" 
                alt="Essential oil bottles with natural herbs and flowers"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

          </div>
        </div>
      </div>
      
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-10 w-1 h-1 bg-amber-400 rounded-full"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-orange-400 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-amber-300 rounded-full"></div>
      </div>
    </section>
  );
};

export default HeroSection;