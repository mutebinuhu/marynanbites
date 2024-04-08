"use client"
import React, {useEffect, useState} from 'react';
import ProductCard from '@/components/ProductCard';



const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log('Product added to cart');
  };
const Menu = () => {
   const [menuItems, setMenuItems] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const getMenu = async () =>{
    setIsLoading(true);
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_URL+"/api/menu", {
          method:'GET',
        })
        const res = await response.json();
        if(response.ok){
          setMenuItems(res)
        }
      setIsLoading(false);
      } catch (error) {
        console.log("err", error)
        setIsLoading(false);
      }
      setIsLoading(false);

   }
   useEffect(()=>{
    getMenu()
   }, [])
    return (
        <div className='bg-[#FFF8EE]'>
            <div>
            <h2 className='text-center text-3xl text-bold py-4'>Our Menu</h2>
            <p className='text-center  mb-12'>Eat smart for a healthy heart</p>
        </div>
            <p className='mx-12'>{isLoading && <span>Loading....</span>}</p>
            <div className="md:grid grid-cols-3 gap-4 md:mx-4 bg-[#FFF8EE]">
            {menuItems && menuItems.map((product)=>{
                return(
                    <ProductCard
                        image={product.image}
                        name={product.name}
                        description={product.description}
                        price={product.price}
                        onAddToCart={handleAddToCart}
                    />
                )
            })}
    </div>
        </div>
    );
}

export default Menu;
