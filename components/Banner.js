import React from 'react';
import Nav from './Nav';
import Link from 'next/link';


const Banner = () => {
    return (
        <div className='md:flex justify-between items-center md:space-x-12 mx-10 relative md:mx-24 '>
            <div className=' w-full md:w-3/5'>
                <h1 className='text-5xl font-semibold text-gray-700	md:mt-12 mt-6 text-normal'>SNACKS AND FOOD YOU WILL LOVE TO <span className='text-[#FF9900]'>EAT</span></h1>
                <p>
                Satisfy your cravings with just a click! Explore our mouthwatering menu on our web app and order now for a taste sensation delivered straight to your doorstep. 
                </p>
                <Link href="">
                    <button className='bg-[#FF9900] hover:bg-[#FBBE63] text-white font-bold py-2 px-4 rounded mt-4'>Order Now</button>
                </Link>
               <div className=''>
             

               </div>
              

            </div>
            <div className='w-full mt-6 rounded-lg border-[#FF9900]  relative  h-60 md:h-96 ' style={{backgroundImage: "url(" + "https://img.freepik.com/free-photo/side-view-chicken-kebab-with-grilled-hot-green-pepper-tomato-pickled-cabbage-rice-pita_141793-4837.jpg?w=826&t=st=1707211174~exp=1707211774~hmac=c19f766ebf763110ab0e61cf315df90bc259b339e50604e3202b982d9ef46463" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}>
    <div className='bg-red-400 w-48 border-8 border-[#FF9900] rounded-full h-48 absolute -right-11 -top-4' style={{backgroundImage: "url(" + "https://img.freepik.com/premium-photo/beer-snacks-food-from-bar_830198-2799.jpg?w=826" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'}}></div>
            </div>

        </div>
    );
}

export default Banner;
