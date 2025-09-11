import React from 'react';

const Gallery = () => {
  return (
    <div className="flex items-center justify-center p-8 bg-gray-100 min-h-screen font-sans">
      <div className="w-full bg-white rounded-3xl shadow-xl p-8 max-w-6xl mx-auto mt-8">
        <h2 className="text-5xl font-extrabold text-center mb-8 font-['Poppins']">GALLERY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative col-span-1 lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://placehold.co/1200x400/E0E0E0/white?text=Our+Heritage" 
              alt="Our Heritage" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-3xl font-bold font-['Poppins']">Our Heritage</h3>
              <p className="font-['sans-serif']">Sed do eiusmod tempor incididunt</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://placehold.co/600x400/E0E0E0/white?text=Our+Mission" 
              alt="Our Mission" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold font-['Poppins']">Our Mission</h3>
              <p className="font-['sans-serif']">ullamco laboris nisi ut</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://placehold.co/600x400/E0E0E0/white?text=Our+Awards" 
              alt="Our Awards" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold font-['Poppins']">Our Awards</h3>
              <p className="font-['sans-serif']">Dolore magna aliqua</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://placehold.co/600x400/E0E0E0/white?text=Principles" 
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
              src="https://placehold.co/600x400/E0E0E0/white?text=Better+World" 
              alt="Better World" 
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-xl font-bold font-['Poppins']">Better World</h3>
              <p className="font-['sans-serif']">quis nostrud exercitation</p>
            </div>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://placehold.co/600x400/E0E0E0/white?text=Sustainability" 
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
