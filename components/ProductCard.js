// ProductCard.js
import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ image, name, description, price, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-4 mx-4 mt-4 md:mt-0 md:mx-0 rounded-lg shadow-md hover:shadow-lg"
    >
      <img src={image} alt={name} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-lg font-bold text-black mb-2">UGX {price}</p>
      <button
        onClick={onAddToCart}
        className="bg-[#FF9900] text-white px-4 py-2 rounded-md hover:bg-[#FBBE63] focus:outline-none focus:shadow-outline-blue"
      >
        Add to Cart
      </button>
    </motion.div>
  );
};

export default ProductCard;
