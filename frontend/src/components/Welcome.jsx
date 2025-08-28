import React from 'react';

const WelcomeSection = () => {
  return (
    <div className="relative bg-[#d9c7b1] min-h-screen w-full flex items-center justify-center p-4 sm:p-8 overflow-hidden font-serif-display text-stone-800">
      {/* Main content container */}
      <main className="relative z-10 max-w-3xl mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-widest uppercase mb-6 text-stone-900">
          WELCOME!
        </h1>

        <div className="border border-stone-500/80 px-6 py-8 sm:px-10 sm:py-10 mb-8">
          <p className="text-base sm:text-lg leading-relaxed text-justify">
            Pumpernickel + Rye is a down-to-earth, homegrown market and new school deli with a modern vibe where our goal is to fulfill your body + soul cravings. As sisters and the best of friends, for us deli means family – and we invite you to our table for a nosh! Indulge yourself in the flavors that inspired our love for deli creations, as well as some elevated culinary finds from our travels around the world.
          </p>
        </div>

        <p className="text-base sm:text-lg leading-relaxed text-justify mb-12">
          You'll be obsessed with our smoothie bar and our locally-sourced espressos + coffee will get you through the daily grind. Pick up a pound of our responsibly sourced, house-smoked meats and cured fish, try one of our daily soup specials, or come chill with us at our laid back yet vibrant restored farmhouse in Urbana.
        </p>
      </main>
    </div>
  );
};

export default WelcomeSection;
