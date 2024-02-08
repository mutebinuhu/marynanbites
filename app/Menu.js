"use client"
import ProductCard from '@/components/ProductCard';
import React from 'react';

const productsList = [
    {
      productName: 'Beef Burger Set',
      productImage:"https://img.freepik.com/free-photo/fast-food-platter-with-burger-fries_114579-2173.jpg?w=826&t=st=1707245277~exp=1707245877~hmac=d14acdabd386008b5199e97c513a94eeda4d3d5c32c1bb1face3f3d5920afda3",
      productDescription: 'Have one Beef burger, French fries and Soda',
      price: 10000,
    },
    {
      productName: 'Fresh Salads',
      productImage:"https://img.freepik.com/free-photo/top-view-homemade-delicious-salad-with-many-ingredients-plate-black-green-mix-colors-background_179666-20005.jpg?w=826&t=st=1707245365~exp=1707245965~hmac=7b93c7f73cbee7ac4e3b16e75e5c232b6ede433f7e22a7f4e637d9daa16d4fa3",
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 5000,
    },
    {
      productName: 'Vegatable Pizza',
      productImage:"https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=826&t=st=1707245414~exp=1707246014~hmac=542be800ede4ff91062936aa94bcf5906341bca64ae6a0d84394de6ca625b536",
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 29.99,
    },
    {
      productName: 'Meat and All Foods',
      productImage:"https://img.freepik.com/premium-photo/bowl-goulash-soup-with-meat-potatoes-chillies-parsley_341862-1969.jpg?w=360",
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 29.99,
    },
    {
      productName: 'Chicken and All Foods',
      productImage:"https://img.freepik.com/free-photo/close-up-homemade-soup-with-chicken-spices-set_140725-114892.jpg?w=826&t=st=1707401028~exp=1707401628~hmac=47182e45283e9678d344aafd69f12c915b06f40d5f161e8176b9db5ecfecdfd7",
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 29.99,
    },
    {
      productName: 'Gnuts and All Foods',
      productImage:"https://i.pinimg.com/564x/04/9e/f6/049ef61c4c699ebe32958c13e608c307.jpg",
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 29.99,
    },
    {
      productName: 'Beans and All Foods',
      productImage:"https://img.freepik.com/free-photo/vertical-view-tomato-soup-beans-lemon-cutting-board-mixed-color-background_140725-91982.jpg?w=360&t=st=1707402199~exp=1707402799~hmac=958106ac18fa28a099f22272a18d22c5c192174b3e5028ea1cc10923408dd278",
      productDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      price: 29.99,
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
            <div className="grid grid-cols-3 gap-4">
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
