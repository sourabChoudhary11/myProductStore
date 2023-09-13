import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa"
import { useState } from "react"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast"
import Loader from "../../components/loader/Loader"

const ProductDetails = () => {

  const dispatch = useDispatch();
  const [productSearch, setProductSearch] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function getDetails() {
      const fetchingData = await fetch(`https://fakestoreapi.com/products/${id}`);
      const fetchedData = await fetchingData.json();
      setProductSearch(fetchedData);
    }
    getDetails();
  }, [])

  return (
    <article className="lg:w-full lg:flex lg:items-center lg:justify-center lg:h-[100vh] lg:absolute lg:top-0 lg:left-0 lg:-z-10">
      {
        productSearch ?
        <div className="flex flex-col items-center px-2 md:flex-row md:space-x-4 xl:w-3/4 xl:mx-auto">
          <img className="w-2/4 my-2" src={productSearch.image} alt="" />
          <div className="flex flex-col space-y-2 lg:space-y-4">
            <span className="bg-black w-fit text-white rounded-md px-3 py-1 capitalize xl:text-xl">{productSearch.category}</span>
            <h1 className="text-xl font-medium xl:text-3xl">{productSearch.title}</h1>
            <p className="text-justify xl:text-xl">{productSearch.description}</p>
            <p className=" text-sm xl:text-[17px]"><span className="font-medium">Price:</span> ${productSearch.price}</p>
            <p className="flex items-center text-sm xl:text-[17px]"><span className="font-medium">Rating:</span> <FaStar className="text-yellow-500" /> {productSearch.rating.rate} out of {productSearch.rating.count}</p>
            <button onClick={() => {
              dispatch({ type: 'ADD_TO_CART', payload: productSearch });
              toast("Success! Item Added to Cart")
            }} className="text-sm w-fit bg-indigo-500 text-white rounded-md py-1 px-2 lg:text-md active:bg-indigo-600">Add to Cart</button>
          </div>
        </div> : <Loader />
      }
    </article>
  )
}

export default ProductDetails