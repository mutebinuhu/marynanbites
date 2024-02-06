// SideNavbar.js
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const SideNavbar = ({ isOpen, onClose }) => {
  const variants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <motion.nav
      className="md:hidden z-30 h-screen fixed top-0 left-0  w-64 bg-primaryColor text-white p-4"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <button className="text-white mb-4" onClick={onClose}>
        Close
      </button>
      <ul>
        
        <Link href="/">
        <li className="mb-2">Home</li>
        </Link>
        <Link href="/about-us">
          <li className="mb-2">Snacks</li>
        </Link>
        <Link href="/contact-us">
          <li className="mb-2">Contact Us</li>
        </Link>
        
    
       


      </ul>
    </motion.nav>
  );
};

export default SideNavbar;
