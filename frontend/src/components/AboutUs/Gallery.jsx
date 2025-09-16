import React from 'react';
import Oilbanner from '../../images/oil_banner.jpg';
import Spicebanner from '../../images/spice_banner.jpg';
import Spicebanner2 from '../../images/spice2banner.jpg';
import Gheebanner from '../../images/gheebanner.jpg';
import Oilbanner2 from '../../images/oilbanner2.jpg';

const Gallery = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-gray-100 min-h-screen font-sans">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold text-center mb-8 font-['Poppins']">GALLERY</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {/* Top-left image (wide) */}
          <div className="relative col-span-1 lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
            <img 
              src={Oilbanner} 
              alt="Our Heritage" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-3xl font-bold font-['Poppins']">Our Heritage</h3>
              <p className="font-['sans-serif']">Sed do eiusmod tempor incididunt</p>
            </div>
          </div>
          {/* Top-right image (square) */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src={Spicebanner} 
              alt="Our Mission" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold font-['Poppins']">Our Mission</h3>
              <p className="font-['sans-serif']">ullamco laboris nisi ut</p>
            </div>
          </div>
          {/* Bottom-left image (tall) */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src={Spicebanner2} 
              alt="Our Awards" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold font-['Poppins']">Our Awards</h3>
              <p className="font-['sans-serif']">Dolore magna aliqua</p>
            </div>
          </div>
          {/* Bottom-middle images (two squares) */}
          <div className="flex flex-col gap-6 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src={Gheebanner}
                alt="Principles" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold font-['Poppins']">Principles</h3>
                <p className="font-['sans-serif']">Ut enim ad minim</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src={Oilbanner2}
                alt="Better World" 
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold font-['Poppins']">Better World</h3>
                <p className="font-['sans-serif']">quis nostrud exercitation</p>
              </div>
            </div>
          </div>
          {/* Bottom-right image (square) */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://placehold.co/600x400/808080/white?text=Sustainability" 
              alt="Sustainability" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold font-['Poppins']">Sustainability</h3>
              <p className="font-['sans-serif']">aliquip ex ea commodo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;