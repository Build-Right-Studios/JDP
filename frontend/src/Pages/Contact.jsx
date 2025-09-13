import React from "react";

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
     
      <div className="bg-black flex items-center justify-center min-h-screen">
        <div className="border-x-8 rounded-lg shadow-lg">
          <h1 className="text-6xl font-extrabold tracking-wide text-white">
            CONTACT US
          </h1>
        </div>
      </div>

      <div className="bg-white min-h-screen flex flex-col items-center">
        <h3 className="text-5xl text-black font-bold text-center py-10">
          OUR STORES
        </h3>

        <div className="w-full max-w-3xl px-6">
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
        </div>
      </div>

      
      <div className="bg-white min-h-screen flex flex-col items-center px-6 py-2">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-center mb-2">
          GET IN TOUCH
        </h2>
        <p className="text-4xl font-extrabold text-center mb-12">
          Love to hear from you, <br /> Get in touch 
        </p>

        <form className="w-full max-w-4xl space-y-6">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Your name</label>
              <input
                type="text"
                placeholder="Dhrati Kaushik"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Your email</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">
                What you are interested
              </label>
              <select className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black">
                <option>Cereal</option>
                <option>Oil</option>
                <option>Ghee</option>
                <option>Spices</option>
                <option>Snacks</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Project Budget</label>
              <select className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black">
                <option>Select your budget</option>
                <option>500 - 1000</option>
                <option>1000 - 5000</option>
                <option>5000+</option>
              </select>
            </div>
          </div>

          
          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              placeholder="Let tell us know your interest"
              rows="5"
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          
          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-gray-800 transition"
            >
              Just Send 
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
