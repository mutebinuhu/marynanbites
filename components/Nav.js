import React from 'react';
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
    return (
        <div className=''>
            <nav className='flex justify-between  items-center p-6'>
                <div className='font-bold'>Marynan <span className='bg-[#FBBE63]  md:mx-0 px-4 py-2 rounded-full'>Bites</span></div>
                <ul className='flex justify-between space-x-2'>
                    <li className='p-3'>Home</li>
                    <li className='p-3'>Menu</li>
                    <li className='p-3'>Contact Us</li>
                    <li className='hidden md:flex font-bold bg-[#FBBE63] items-center space-x-2 border p-3 rounded-3xl border-gray-800'>
                        <span className=''>Menu</span>
                        <span><CiMenuFries/></span>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
