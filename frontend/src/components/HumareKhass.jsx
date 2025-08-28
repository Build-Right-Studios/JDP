import React from "react";
import KhassCard from "./KhassCard.jsx";

const HumareKhass = () => {
  const khassItems = [
    {
      id: 1,
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1206682746.jpg",
      detail: "Humara Khass",
    },
    {
      id: 2,
      image:
        "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1206682746.jpg",
      detail: "",
    },
    {
      id: 3,
      image:
"https://hips.hearstapps.com/hmg-prod/images/gettyimages-1206682746.jpg"
,
      detail: "",
    },
  ];

  const handleExplore = (id) => {
    /////empty button -- functionality to be added
    alert(`Explore more about item ID: ${id}`);
  };

  return (
    <section className="bg-[#e5cfb6] py-12 px-4 ">
      <h2 className="text-[#8B4513] text-3xl lg:text-5xl font-bold leading-tight montserrat-medium text-amber-900 ml-15 mb-4 mt-4">Humare Khass</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
        {khassItems.map((item) => (
          <KhassCard
            key={item.id}
            image={item.image}
            detail={item.detail}
            onExplore={() => handleExplore(item.id)}
          />
        ))}
      </div>
    </section>
  );
};
export default HumareKhass;
