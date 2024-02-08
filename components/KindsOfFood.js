import Link from 'next/link';
import React from 'react';

const KindsOfFood = () => {
    return (
        <div className='md:flex justify-between mt-24 items-center md:space-x-4 mx-10 relative md:mx-12 '>
      

        <div className=' w-full md:w-1/2'>
            <h1 className='text-5xl font-semibold text-gray-700	md:mt-12 mt-6 text-normal'>            We Cook all types Of  <span className='text-[#FF9900]'> Local</span> foods </h1>
            <p className='py-6'>
            </p>
            <Link href="/menu">
                <button className='bg-[#FF9900] px-2 text-bold  text-white rounded py-2 mt-4'>Order Now</button>
            </Link>
            <Link href="/menu">
                <button className='bg-[#FF9900] px-2 text-bold rounded py-2 mt-4 mx-2'>View Menu</button>
            </Link>
           <div className=''>
         

           </div>
          

        </div>

          
        <div className='w-full md:w-1/2 mt-6 rounded-lg border-[#FF9900] border-4 relative  h-60 md:h-96 ' style={{backgroundImage: "url(" + "https://img.freepik.com/free-photo/high-angle-table-full-delicious-food-arrangement_23-2149141346.jpg?w=826&t=st=1707309356~exp=1707309956~hmac=11a54ce0e3b2bfdc5963d15a8496814b4d651ebd41b293467a01e90c41bdd58f" + ")",
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'}}>

        </div>

    </div>
    );
}

export default KindsOfFood;
