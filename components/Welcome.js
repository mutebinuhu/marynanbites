import Link from 'next/link';
import React from 'react';

const Welcome = () => {
    return (
        <div className='md:flex justify-between mt-24 items-center md:space-x-4 mx-10 relative md:mx-12 '>
        
        <div className='w-full md:w-1/2 mt-6 rounded-lg border-[#FF9900]  relative  h-60 md:h-96 ' style={{backgroundImage: "url(" + "https://img.freepik.com/free-photo/young-joyful-afro-american-cook-chef-uniform-closes-eyes-holding-tomatoes-with-hands-isolated-orange-wall_141793-33280.jpg?w=740&t=st=1707239996~exp=1707240596~hmac=915bc78ba20bcc736691c075589b8f2a505be66420b7f64765fa151523a987c8" + ")",
backgroundPosition: 'center',
backgroundSize: 'cover',
backgroundRepeat: 'no-repeat'}}>

        </div>

        <div className=' w-full md:w-1/2'>
            <h1 className='text-5xl font-semibold text-gray-700	md:mt-12 mt-6 text-normal'>Welcome to <span className='text-[#FF9900]'> Marynan Bites</span></h1>
            <p className='py-6'>
            Embark on a culinary journey with us! From meticulously crafted dishes to doorstep convenience, each bite promises perfection. Click, order, and indulge in the exquisite flavors waiting for you. Your next delicious meal is just a few taps away. Bon appétit! 🍔
            </p>
            <div className='text-center'>
            <Link href="/menu">
                <button className='bg-[#FF9900] px-2 text-bold text-white rounded py-2 mt-4'>Order Now</button>
            </Link>
            <Link href="/menu">
                <button className='bg-[#FF9900] px-2 text-bold rounded py-2 mt-4 mx-2'>View Menu</button>
            </Link>
            </div>
           <div className=''>
         

           </div>
          

        </div>

    </div>
    );
}

export default Welcome;
