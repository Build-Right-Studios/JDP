import React from "react";
import Hero from "../components/AboutUs/hero";
import GreenBar from "../components/AboutUs/GreenBar";
import GetinTouch from '../components/Contact/Getintouch';
import GetinTouch2 from '../components/Contact/Getintouch2';

const Contact = () => {
  const stores = [
    {
      name: "Jain Desi & Pure",
      address: "Noida sec 62",
      phone: "+91 XXXXXXXXXX",
    },
    {
      name: "Jain Desi & Pure",
      address: "Noida sec 62",
      phone: "+91 XXXXXXXXXX",
    },
  ];

  return (
    <div>

      <div className="bg-black flex items-center justify-center">
        <div className="border-x-8 rounded-lg shadow-lg">
          <Hero name="CONTACT US" />
          <GreenBar />
        </div>
      </div>

      <div className="bg-white min-h-screen flex flex-col items-center">
        <h3 className="text-5xl text-black font-bold text-center py-10">
          OUR STORES
        </h3>

        {/* <div className="w-full max-w-3xl px-6">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-200 rounded-lg overflow-hidden mb-8 h-45"
            >

              <div className="bg-gray-500 text-white flex justify-center items-center w-45 h-full font-bold text-lg">
                img
              </div>


              <div className="text-left p-6 flex-1">
                <h3 className="font-bold text-2xl">{store.name}</h3>
                <p className="text-lg">{store.address}</p>
                <p className="text-lg">{store.phone}</p>
              </div>
            </div>
          ))}
        </div> */}
        <GetinTouch />
        <GetinTouch2 />
      </div>


      <div className="bg-white min-h-screen flex flex-col justify-center items-center px-10 py-10">
        <div className="w-full max-w-6xl">
          <h2 className="text-6xl font-bold uppercase tracking-wide text-center mb-4">
            GET IN TOUCH
          </h2>
          <p className="text-4xl md:text-5xl font-extrabold text-center mb-12">
            Love to hear from you !!
          </p>

          <form className="w-full bg-gray-50 p-10 rounded-lg shadow-lg space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-700 mb-3 text-lg">Your name</label>
                <input
                  type="text"
                  placeholder="Dhrati Kaushik"
                  className="w-full border border-gray-300 rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-3 text-lg">Your email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full border border-gray-300 rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-3 text-lg">Message</label>
              <textarea
                placeholder="Let tell us know your interest"
                rows="6"
                className="w-full border border-gray-300 rounded-md p-4 text-lg focus:outline-none focus:ring-2 focus:ring-black"
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-black text-white px-12 py-4 rounded-md font-semibold text-lg hover:bg-gray-800 transition"
              >
                Connect
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
