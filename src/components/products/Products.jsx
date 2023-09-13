import React, { useState } from 'react'
import ProductsCategoryNavigation from './productsCategoryNavigation/ProductsCategoryNavigation'
import CategoryProducts from './categoryProducts/CategoryProducts'
import Loader from '../loader/Loader';

const Products = () => {

    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);

    return (
        <section>
            <ProductsCategoryNavigation category={category} setCategory={setCategory} />
            {
                loading && <Loader />
            }
            <CategoryProducts category={category} loading={loading} setLoading={setLoading} />
            
        </section>
    )
}

export default Products