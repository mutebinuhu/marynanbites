// src/components/Alert.js
import React from 'react';
import { motion } from 'framer-motion';

const Alert = ({ type, message, onClose }) => {
  const getAlertStyle = () => {
    switch (type) {
      case 'success':
        return 'bg-green-500 text-white';
      case 'warning':
        return 'bg-yellow-500 text-black';
      case 'error':
        return 'bg-red-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 right-0 p-4 m-4 rounded-md shadow-lg ${getAlertStyle()}`}
    >
      <div className="flex justify-between items-center">
        <span>{message}</span>
        <button onClick={onClose} className="text-white focus:outline-none">
          X
        </button>
      </div>
    </motion.div>
  );
};

export default Alert;
