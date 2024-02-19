import ProductForm from '@/components/ProductForm';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-[#FFF8EE]'>
            <h1 className='mx-12 text-2xl text-bold'>Add Menu Item</h1>
            <ProductForm/>
        </div>
    );
}

export default Page;
