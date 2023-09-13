import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"


const CategoryProducts = ({ category, loading, setLoading }) => {

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const url = 'https://fakestoreapi.com/products';
            setLoading(true);
            const fetchingData = await fetch(`${url}/${category}`);
            const fetchedData = await fetchingData.json();
            setLoading(false);
            setProducts(fetchedData);
        } catch (error) {
            setLoading(false);
            document.write("Internet Connection Error");
        }
    }

useEffect(() => {
    getProducts();
}, [category])

return (

    <main className='flex flex-wrap'>
        { !loading &&
            products.map(product => (
                <div key={product.id} className='flex flex-col items-center space-y-2 text-center my-5 w-full xs:w-1/2 sm:w-1/3 md:w-1/4'>
                    <img className='w-2/3 h-40 sm:h-44' src={product.image} alt="" />
                    <h1 className='w-2/3 font-medium '>{product.title}</h1>
                    <p className='w-2/3 text-sm'>From <span className='font-medium'> ${product.price}</span></p>
                    <Link to={`/products/${product.id}`} className='bg-blue-600 text-white text-sm rounded-md w-2/3 px-2 py-1 hover:bg-blue-700'>
                        Shop Now
                    </Link>
                </div>
            ))
        }
    </main>

)
}

export default CategoryProducts