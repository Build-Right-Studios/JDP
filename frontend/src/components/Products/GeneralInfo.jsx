import React from "react";

function GeneralInfo() {
  return (
    <div className="mt-14 mx-3">
      <h2 className="text-5xl font-bold text-gray-800 mb-8 text-center">
        🌟 Why Choose Us?
      </h2>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h3 className="text-3xl lg:text-4xl font-semibold">🔥 Pure & Authentic</h3>
          <p className="text-md text-gray-600 text-justify">
            Every product is made using <strong>traditional methods</strong> that
            preserve natural taste, aroma, and nutrition — free from chemicals,
            preservatives, or artificial additives.
          </p>
        </div>

        <div>
          <h3 className="text-3xl lg:text-4xl font-semibold">🌿 Rooted in Tradition</h3>
          <p className="text-md text-gray-600 text-justify">
            Whether it’s oils, flours, ghee, or spices, we follow{" "}
            <strong>time-honored practices</strong> trusted in Indian households
            for generations.
          </p>
        </div>

        <div>
          <h3 className="text-3xl lg:text-4xl font-semibold">💪 Health & Wellness</h3>
          <p className="text-md text-gray-600 text-justify">
            Rich in <strong>essential nutrients, antioxidants, and natural
            goodness</strong>, our products don’t just taste better — they also
            support immunity, digestion, and overall well-being.
          </p>
        </div>

        <div>
          <h3 className="text-3xl lg:text-4xl font-semibold">📦 Freshness Guaranteed</h3>
          <p className="text-md text-gray-600 text-justify">
            Packed in <strong>airtight, resealable pouches or bottles</strong> to
            lock in freshness. Store in a cool, dry place and enjoy authentic
            flavor every time.
          </p>
        </div>

        <div>
          <h3 className="text-3xl lg:text-4xl font-semibold">🛒 From Our Kitchens to Yours</h3>
          <p className="text-md text-gray-600 text-justify">
            We bring you products that are not only{" "}
            <strong>delicious and wholesome</strong> but also carry the{" "}
            <strong>essence of Indian tradition and purity</strong> straight to
            your home.
          </p>
        </div>
      </div>
    </div>
  );
}

export default GeneralInfo;
