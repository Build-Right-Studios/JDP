import React from "react";

const KhassCard = ({ image, detail, onExplore }) => {
  return (
    <div className="bg-[#e5cfb6] max-w-xs sm:max-w-sm w-full rounded-3xl p-6 flex flex-col items-center">
      <div className="w-full aspect-[3/4] bg-[#f8f2e8] rounded-2xl overflow-hidden flex items-center justify-center">
        <img
          src={image}
          alt="Khass"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <p className="text-black text-lg mt-6 mb-4 font-medium text-center">
        Details: <span className="font-normal">{detail}</span>
      </p>

      <button
        onClick={onExplore}
        className="bg-[#f8f2e8] hover:bg-[#f3e8d7] text-black font-bold text-lg py-3 px-8 rounded-full transition duration-300"
      >
        Explore More
      </button>
    </div>
  );
};

export default KhassCard;
