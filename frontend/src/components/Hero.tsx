import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-amber-50 to-orange-100 min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-amber-900 leading-tight">
                Essential Oil Bottles
              </h1>
              <h2 className="text-3xl lg:text-4xl font-semibold text-amber-800">
                Whole Sale in Custom Packaging
              </h2>
            </div>
            
            <button className="bg-amber-900 hover:bg-amber-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Explore More
            </button>
            
            {/* Stats */}
            <div className="space-y-4 pt-8">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-amber-700"></div>
                <span className="text-xl text-amber-800 font-medium">1500+ Products Sold</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 rounded-full bg-amber-700"></div>
                <span className="text-xl text-amber-800 font-medium">1500+ Products Sold</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="oil.png" 
                alt="Essential oil bottles with natural herbs and flowers"
                className="w-full h-auto object-cover rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-orange-300 to-amber-400 rounded-full opacity-15 blur-2xl"></div>
            
            {/* Additional stats positioned on the right */}
            <div className="absolute -bottom-12 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-200">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-amber-700"></div>
                  <span className="text-amber-800 font-medium">1500+ Products Sold</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 rounded-full bg-amber-700"></div>
                  <span className="text-amber-800 font-medium">1500+ Products Sold</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-1 h-1 bg-orange-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-amber-300 rounded-full opacity-60 animate-pulse"></div>
      </div>
    </section>
  );
};

export default HeroSection;