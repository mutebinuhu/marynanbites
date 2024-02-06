import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ image, title, description, buttonText }) => {
  return (
    <motion.div
      className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg mt-4 md:mt-0"
      whileHover={{ scale: 1.05 }}
    >
      <img className="w-full" src={image} alt="Card" />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <button className="bg-[#FF9900] hover:bg-[#FBBE63] text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
