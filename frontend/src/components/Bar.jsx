import React from 'react';

const Bar = () => {
  
  const items = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 text-gray-800"
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: '100% Satisfaction',
      description: 'Try us to love us!',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 text-gray-800"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.597 21.49c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: '100% Quality Products',
      description: 'Guaranteed quality',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 text-gray-800"
        >
          <path d="M7.5 7.5a3 3 0 100 6h9a3 3 0 100-6h-9z" />
          <path
            fillRule="evenodd"
            d="M1.5 8.625c0-.986.793-1.782 1.763-1.802a4.5 4.5 0 01.402-1.897C4.542 4.09 5.308 3 6.667 3h.004a6 6 0 011.834 5.86l-1.547 3.095A8.995 8.995 0 0012 15c1.133 0 2.223-.178 3.255-.519l-1.548-3.096A6 6 0 0116.33 3H16.5c1.359 0 2.125 1.09 2.902 2.026a4.5 4.5 0 01.402 1.897c.97.02 1.763.816 1.763 1.802v1.517a2.25 2.25 0 01-4.5 0v-1.517l.685-.456c.451-.301.705-.831.621-1.372A2.25 2.25 0 0017.5 6.75h-1.875a.75.75 0 00-.75.75v3.75c0 .085-.008.17-.022.253A10.457 10.457 0 0115 15c-.754 0-1.503-.058-2.24-.171a.75.75 0 01-.527-.704V9.75a.75.75 0 01.75-.75h1.5a.75.75 0 00.75-.75V5.25a.75.75 0 00-.75-.75h-3.992c-.318 0-.625.043-.923.125l-.25.084a.75.75 0 00-.51.704v5.25a.75.75 0 01-.75.75H8.25a.75.75 0 01-.75-.75V5.25a.75.75 0 00-.75-.75H3.75a.75.75 0 00-.75.75v3.375A2.25 2.25 0 011.5 8.625zM15 12a3 3 0 10-6 0 3 3 0 006 0z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Membership Discounts',
      description: 'Join today and get 40% off',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-12 h-12 text-gray-800"
        >
          <path
            fillRule="evenodd"
            d="M1.5 6a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3V9a3 3 0 00-3-3h-2.25A2.25 2.25 0 0016.5 4.5h-9A2.25 2.25 0 007.5 6H5.25a.75.75 0 010 1.5h13.5a.75.75 0 010-1.5H5.25A2.25 2.25 0 003 4.5h-1.5a.75.75 0 000 1.5H3zm0 3a1.5 1.5 0 011.5-1.5h15a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5V9z"
            clipRule="evenodd"
          />
        </svg>
      ),
      title: 'Free Shipping',
      description: 'On orders above $299',
    },
  ];

  return (
    <div className="bg-[#59663f] w-full py-8 text-white flex justify-center items-center">
      <div className="flex flex-row space-x-12 animate-marquee">
        {[...items, ...items].map((item, index) => (
          // Each individual marquee item
          <div
            key={index}
            className="flex flex-row items-center space-x-4 min-w-[250px]"
          >
            {/* The icon container with a gray, rounded background.
              This mimics the shape and style from the reference image.
              We use a subtle shadow for a modern look.
            */}
            <div className="flex-shrink-0 bg-gray-300 rounded-full w-20 h-20 flex items-center justify-center p-2 shadow-lg">
              {item.icon}
            </div>
            {/* Text container for title and description */}
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-gray-100">{item.title}</h3>
              <p className="text-sm text-gray-200">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* A custom CSS block to define the marquee animation.
        This is a workaround for the lack of native Tailwind marquee support
        and allows us to define a continuous scrolling animation.
        The animation moves the element to the left by 50% of its width.
      */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 20s linear infinite;
            width: 200%;
            display: flex;
            flex-shrink: 0;
            will-change: transform;
          }
        `}
      </style>
    </div>
  );
};

export default Bar;
