"use client"
import ProductCard from '@/components/ProductCard';
import React from 'react';

const productsList = [
    {
      productName: 'Beef Burger Set',
      productImage:"https://img.freepik.com/free-photo/fast-food-platter-with-burger-fries_114579-2173.jpg?w=826&t=st=1707245277~exp=1707245877~hmac=d14acdabd386008b5199e97c513a94eeda4d3d5c32c1bb1face3f3d5920afda3",
      productDescription: 'Welcome to a world of culinary delight with our Gourmet Angus Beef Burger, a masterpiece that elevates the classic American comfort food to a whole new level',
      price: 10000,
      category:"snack"
    },
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
      productName: 'Meat and All Foods',
      productImage:"https://img.freepik.com/premium-photo/bowl-goulash-soup-with-meat-potatoes-chillies-parsley_341862-1969.jpg?w=360",
      productDescription: 'Have Your Lunch with Our smoked First Meat, Feel  the aroma for every bite You take. You can have it with matooke, sweet potatoes, Cassava, White or brown rice',
      price: 6000,
      category:"localFood"
    },
    {
      productName: 'Chicken and All Foods',
      productImage:"https://img.freepik.com/free-photo/close-up-homemade-soup-with-chicken-spices-set_140725-114892.jpg?w=826&t=st=1707401028~exp=1707401628~hmac=47182e45283e9678d344aafd69f12c915b06f40d5f161e8176b9db5ecfecdfd7",
      productDescription: 'Our Chicken is one of the best dishes You will have to try atleast once in your line. Have it with matooke, Brown or White Rice. Its Yummy and You will be satisfied Regardless.',
      price: 8000,
      category:"localFood"

    },
    {
      productName: 'Gnuts and All Foods',
      productImage:"https://i.pinimg.com/564x/04/9e/f6/049ef61c4c699ebe32958c13e608c307.jpg",
      productDescription: 'Whether Plain or with Smoked Fish, Im sure that we shall sparkle your Taste Buds. You can have Gnuts with any type of food You would like.',
      price: 5000,
      category:"localFood"

    },
    {
      productName: 'Beans and All Foods',
      productImage:"https://img.freepik.com/free-photo/vertical-view-tomato-soup-beans-lemon-cutting-board-mixed-color-background_140725-91982.jpg?w=360&t=st=1707402199~exp=1707402799~hmac=958106ac18fa28a099f22272a18d22c5c192174b3e5028ea1cc10923408dd278",
      productDescription: 'If You are a fun of Beans, You got covered. Do You want Some Beef In Beans still we gat You. Place Your order now with all Foods',
      price: 5000,
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
      price: 1000,
      category:"snack"

    },
  ];
const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log('Product added to cart');
  };
const Menu = () => {
    return (
        <div className='bg-[#FFF8EE]'>
            <div>
            <h2 className='text-center text-3xl text-bold py-4'>Our Menu</h2>
            <p className='text-center  mb-12'>Eat smart for a healthy heart</p>
        </div>
            <div className="md:grid grid-cols-3 gap-4 md:mx-4">
            {productsList.map((product)=>{
                return(
                    <ProductCard
                        image={product.productImage}
                        name={product.productName}
                        description={product.productDescription}
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
