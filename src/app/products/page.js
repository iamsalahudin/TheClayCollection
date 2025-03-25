'use client'; // Required for client-side components
import { useContext } from 'react';
import React from 'react';
import Productcard from '../(components)/productcard/productcard';
import CategoriesNav from '../(components)/categories/categoriesNav';
import HeadingBar from "../(components)/headingBar/headingBar";
import { ProductsContext } from '../layout';

const Page = () => {
    const Products = useContext(ProductsContext);
    return (
        <div className='flex px-3 lg:px-20'>
            <CategoriesNav />
            <div className='lg:w-4/5 w-full flex flex-col gap-5 p-5'>
                <HeadingBar title="All Products" heading="What we deliver" className="" />
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
                    {Products.map((product) => (
                        <Productcard key={product.ProductID} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;