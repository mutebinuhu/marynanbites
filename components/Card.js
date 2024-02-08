import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
        <div className='flex space-x-4'>
          
        <Link href="/menu">
        <button className="bg-[#FF9900] hover:bg-[#FBBE63] text-white font-bold py-2 px-2 rounded">
          {buttonText}
        </button>
        </Link>
        <Link href="/menu">
                <button className='bg-[#FF9900] px-2 text-bold rounded py-2'>View Menu</button>
            </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
