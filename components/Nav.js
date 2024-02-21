import Link from 'next/link';
import React from 'react';
import { CiMenuFries } from "react-icons/ci";

const Nav = () => {
    return (
        <div className=''>
            <nav className='flex justify-between  items-center p-6'>
                <Link href="/">
                <div className='font-bold'>Marynan <span className='bg-[#FBBE63]  md:mx-0 px-4 py-2 rounded-full'>Bites</span></div>
                </Link>
                <ul className='flex justify-between space-x-2'>
                    <li className='p-3 hidden md:inline'><Link href="/">Home</Link></li>
                    <li className='p-3 hidden md:inline'><Link href="/menu">Menu</Link></li>
                    <li className='p-3 hidden md:inline'><Link href="/contact-us">Contact Us</Link></li>
                    <li className='md:hidden flex font-bold bg-[#FBBE63] items-center space-x-2 border p-3 rounded border-gray-800'>
                        <span><CiMenuFries/></span>
                    </li>
                    <li className='p-3 hidden md:inline'><Link href="/add-menu">Manage Menu</Link></li>

                    <li className='hidden md:block hover:bg-[#FBBE63] border border-gray-500  font-bold p-3 px-4 rounded'>
                    <Link href="/login">
                        Login
                    </Link>
                    </li>
                    <li className='hidden md:block  bg-[#FBBE63] hover:bg-[#FBBE63] border border-gray-500  font-bold p-3 px-4 rounded'>
                    <Link href="/sign-up">
                       Sign Up
                    </Link>
                    </li>
                   
                </ul>
            </nav>
        </div>
    );
}

export default Nav;
