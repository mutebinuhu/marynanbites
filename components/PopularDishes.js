import React from 'react';
import Card from './Card';
const dishes = [
    {
        imageUrl:"https://img.freepik.com/free-photo/fast-food-platter-with-burger-fries_114579-2173.jpg?w=826&t=st=1707245277~exp=1707245877~hmac=d14acdabd386008b5199e97c513a94eeda4d3d5c32c1bb1face3f3d5920afda3",
        title:"Beef Burger Set",
        description:"Description",
        buttonText:"Order Now"

    },
    {
        imageUrl:"https://img.freepik.com/free-photo/top-view-homemade-delicious-salad-with-many-ingredients-plate-black-green-mix-colors-background_179666-20005.jpg?w=826&t=st=1707245365~exp=1707245965~hmac=7b93c7f73cbee7ac4e3b16e75e5c232b6ede433f7e22a7f4e637d9daa16d4fa3",
        title:"Fresh Salads",
        description:"Description",
        buttonText:"Order Now"

    },
    {
        imageUrl:"https://img.freepik.com/free-photo/mixed-pizza-with-various-ingridients_140725-3790.jpg?w=826&t=st=1707245414~exp=1707246014~hmac=542be800ede4ff91062936aa94bcf5906341bca64ae6a0d84394de6ca625b536",
        title:"Vegatable Pizza",
        description:"Description",
        buttonText:"Order Now"

    }
]

const PopularDishes = () => {
    return (
        <div className='mt-24'>
        <div>
            <h2 className='text-center text-3xl text-bold py-4'>Our Popular Dishes</h2>
            <p className='text-center  mb-12'>Eat smart for a healthy heart</p>
        </div>
        <div className="md:flex justify-center items-center md:space-x-4  mx-12   ">
       
       {dishes.map((dish)=>{
           return(
               <Card
               image={dish.imageUrl}
               title={dish.title}
               description={dish.description}
               buttonText="Order Now"
             />
           )
       })}
     </div>
        </div>
    );
}

export default PopularDishes;
