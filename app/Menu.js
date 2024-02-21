"use client"
import React, {useEffect, useState} from 'react';
import ProductCard from '@/components/ProductCard';


const productsList = [
    
    {
      productName: 'Classic Garden Salad',
      productImage:"https://img.freepik.com/free-photo/top-view-homemade-delicious-salad-with-many-ingredients-plate-black-green-mix-colors-background_179666-20005.jpg?w=826&t=st=1707245365~exp=1707245965~hmac=7b93c7f73cbee7ac4e3b16e75e5c232b6ede433f7e22a7f4e637d9daa16d4fa3",
      productDescription: 'A vibrant medley of crisp lettuce, juicy tomatoes, cucumber slices, and colorful bell peppers, tossed with a zesty vinaigrette',
      price: 5000,
      category:"salad"
    },
    {
      productName: 'Vegatable Pizza',
      productImage:"https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=826&t=st=1707245414~exp=1707246014~hmac=542be800ede4ff91062936aa94bcf5906341bca64ae6a0d84394de6ca625b536",
      productDescription: 'Each slice promises a harmonious blend of sweet, tangy tomatoes, the creaminess of the mozzarella',
      price: 1000,
      category:"snack"
    },
    
   

    {
      productName: 'Beans and All Foods',
      productImage:"https://img.freepik.com/free-photo/vertical-view-tomato-soup-beans-lemon-cutting-board-mixed-color-background_140725-91982.jpg?w=360&t=st=1707402199~exp=1707402799~hmac=958106ac18fa28a099f22272a18d22c5c192174b3e5028ea1cc10923408dd278",
      productDescription: 'If You are a fun of Beans, You got covered. Do You want Some Beef In Beans still we gat You. Place Your order now with all Foods',
      price: 7000,
      category:"localFood"

    },
    {
      productName: 'Chaps and kabab',
      productImage:"/images/kababs.jpg",
      productDescription: 'Indulge in the perfection of our expertly chaps and kababs. Each succulent piece features a golden exterior, sealing in rich, juicy tenderness for a flavor experience like no other',
      price: 3000,
      category:"snack"

    },
    {
      productName: 'Beef or Peas Samosa',
      productImage:"/images/beefsamosa.jpg",
      productDescription: 'Satisfy your cravings with our delectable Beef or Peas Samosas. Encased in a crispy, golden pastry shell is a flavorful filling of finely seasoned ground beef, onions, and aromatic spices',
      price: 1000,
      category:"snack"

    },
    {
      productName: 'Chips and Chicken',
      productImage:"/images/chips.jpg",
      productDescription: "Savor our irresistible duo of tender, expertly seasoned crispy chicken and perfectly golden chips. Each bite promises a delightful crunch, delivering a mouthwatering experience of flavors and texture",
      price: 10000,
      category:"snack"

    },
  ];
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
