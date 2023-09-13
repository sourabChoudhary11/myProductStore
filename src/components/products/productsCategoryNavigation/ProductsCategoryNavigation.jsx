import React from 'react'
import products_logo from "../../../assets/logos/products_logo.jpg"
import women_fashion_logo from "../../../assets/logos/women_logo.jpg"
import men_logo from "../../../assets/logos/men_logo.jpg"
import electronics_logo from "../../../assets/logos/electronics_logo.jpg"
import jewelery_logo from "../../../assets/logos/jewelery_logo.jpg"

const ProductsCategoryNavigation = ({category, setCategory}) => {

    const clickHandler = (query)=>{
        setCategory(query);
    }

    return (
        <div className='sticky w-full top-10 left-0 py-3 bg-gray-300 sm:top-[52px]'>
            <main className='flex justify-evenly text-xs sm:text-base'>
                <button className='flex flex-col items-center' onClick={()=>clickHandler("")}>
                    <img className='w-10 h-10 rounded-full' src={products_logo} alt="products_logo" />
                    <span className='w-12 text-center sm:w-20'>Products</span>
                </button>

                <button className='flex flex-col items-center' onClick={()=>clickHandler("category/women's clothing")}>
                    <img className='w-10 h-10 rounded-full' src={women_fashion_logo} alt="women_fashion_logo" />
                    <span className='w-12 text-center sm:w-20'>Women's Fashion</span>
                </button>

                <button className='flex flex-col items-center' onClick={()=>clickHandler("category/men's clothing")}>
                    <img className='w-10 h-10 rounded-full' src={men_logo} alt="men_logo" />
                    <span className='w-12 text-center sm:w-20'>Men's Fashion</span>
                </button>

                <button className='flex flex-col items-center' onClick={()=>clickHandler("category/electronics")}>
                    <img className='w-10 h-10 rounded-full' src={electronics_logo} alt="electronics_logo" />
                    <span className='w-12 text-center sm:w-20'>Electronics</span>
                </button>

                <button className='flex flex-col items-center' onClick={()=>clickHandler("category/jewelery")}>
                    <img className='w-10 h-10 rounded-full' src={jewelery_logo} alt="jewelery_logo" />
                    <span className='w-12 text-center'>Jewelery</span>
                </button>
            </main>
        </div>
    )
}

export default ProductsCategoryNavigation