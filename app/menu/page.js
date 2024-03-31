import React from 'react';
import Menu from '../Menu';

export const metadata = {
    title: "Menu",
    description: "Have a look at our menu and Place Your order now.",
  };
const Page = () => {
    return (
        <div className='bg-[#FFF8EE]'>
            <Menu/>
        </div>
    );
}

export default Page;
