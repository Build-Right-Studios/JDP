import React from 'react';
import { motion } from 'framer-motion';

const GreenBar = () => {

  const marqueeVariants = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="flex items-center justify-center h-24 bg-[#5c8a40] overflow-hidden">
      <div className="flex flex-grow text-white font-bold whitespace-nowrap">
        <motion.h1
          className="text-2xl font-semibold px-4"
          variants={marqueeVariants}
          animate="animate"
        >
          Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•
        </motion.h1>
        <motion.h1
          className="text-2xl font-semibold px-4"
          variants={marqueeVariants}
          animate="animate"
        >
          Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•&nbsp;&nbsp;Traditional&nbsp;Ingredients&nbsp;•
        </motion.h1>
      </div>
    </div>
  );
};

export default GreenBar;