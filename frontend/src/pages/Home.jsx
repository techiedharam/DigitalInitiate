// import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#edf2f4] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Gradient Circle with Blur Effect */}
      <div className="absolute top-80 left-20 w-[520px] h-[400px] z-1 rounded-full bg-[#eb26fd] blur-[90px] opacity-70 shadow-2xl animate-pulse"></div>
      <div className="absolute top-80 right-20 w-[520px] h-[400px] rounded-full bg-[#ffbd00] blur-[90px] opacity-70 shadow-2xl animate-pulse"></div>

      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-7xl font-bold leading-tight mb-6"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Boost Your Presence Into <br />
        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent font-extrabold text-5xl md:text-8xl">
          The Digital Spotlight
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className="max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
        luctus nec ullamcorper mattis, pulvinar dapibus leo.
      </motion.p>

      {/* Call-to-Action Button */}
      <motion.button
        className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:from-orange-500 hover:to-yellow-400 transition duration-300 ease-in-out transform hover:scale-105"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Get Started
      </motion.button>
    </div>
  );
};

export default Home;
