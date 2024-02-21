// SideNavbar.js
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MdCancel } from "react-icons/md";


const SideNavbar = ({ isOpen, onClose }) => {
  const variants = {
    open: { x: 0 },
    closed: { x: '-100%' },
  };

  return (
    <motion.nav
      className="md:hidden z-30 h-screen  fixed top-0 left-0  w-64 bg-[#FBBE63] text-white p-4"
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      variants={variants}
    >
      <button className="text-white mb-4" onClick={onClose}>
        <MdCancel className='text-2xl'/>
      </button>
      <ul>
        
        <Link href="/">
        <li className="mb-2"  onClick={onClose}>Home</li>
        </Link>
        <Link href="/menu">
          <li className="mb-2" onClick={onClose}>Menu</li>
        </Link>
        <Link href="/add-menu">
          <li className="mb-2" onClick={onClose}>Manage Menu</li>
        </Link>

        <Link href="/contact-us">
          <li className="mb-2" onClick={onClose}>Contact Us</li>
        </Link>
        
        <li onClick={onClose} className='md:block hover:bg-[#FBBE63] border border-gray-500  font-bold p-3 px-2 rounded-full'>
            <Link href="/login">
                Login
            </Link>
        </li>
                    <li onClick={onClose} className='md:block mt-6 hover:bg-[#FBBE63] border border-gray-500  font-bold p-3 px-2 rounded-full'>
                    <Link href="/sign-up">
                       Sign Up
                    </Link>
                    </li>
       


      </ul>
    </motion.nav>
  );
};

export default SideNavbar;
