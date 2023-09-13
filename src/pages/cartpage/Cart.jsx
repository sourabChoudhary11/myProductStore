import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { MdDelete } from "react-icons/md"
import { useDispatch } from 'react-redux';
import PriceDetails from './priceDetails/PriceDetails';

const Cart = () => {

  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  return (
    <section className='absolute top-0 left-0 w-full -z-10 h-[100vh] box-border sm:pt-16 sm:flex sm:justify-between sm:h-auto'>
      <div className='h-[60vh] overflow-auto box-border py-16 pb-10 sm:w-[60vw] sm:px-10 sm:h-[90vh] sm:py-4 sm:pb-4'>

        <div className='flex flex-col bg-white w-full space-y-5 sm:mx-auto sm:space-y-5'>
          {
            cartItems.length > 0 ? cartItems.map(ele => (
              <div key={ele.id} className='flex flex-col space-y-3 justify-evenly w-full sm:px-5 sm:space-x-6 sm:flex-row sm:items-center sm:justify-start '>
                <img className='w-2/4 self-center sm:w-1/4' src={ele.image} alt="" />
                <div className='flex flex-col justify-center space-y-2'>
                  <h2 className='font-medium text-md md:text-xl'>{ele.title}</h2>
                  <p className='text-xs md:text-base'>${ele.price} X {ele.quantity} = ${ele.price*ele.quantity}</p>
                  <div className='flex items-center space-x-2'>
                    <button onClick={() => {
                      dispatch({ type: 'DECREMENT_QUANTITY', payload: ele.id })
                    }} className='w-6 bg-indigo-600 rounded-md text-white'>-</button>
                    <span className='mx-2 text-xs md:text-base'>{ele.quantity}</span>
                    <button onClick={() => {
                      dispatch({ type: 'INCREMENT_QUANTITY', payload: ele.id })
                    }} className='w-6 bg-indigo-600 rounded-md text-white'>+</button>
                    <button onClick={() => {
                      dispatch({ type: "DELETE_FROM_CART", payload: ele.id })
                    }} className="bg-black text-white w-fit px-1 py-1 rounded-md text-md"><MdDelete /></button>
                  </div>
                </div>
              </div>
            )) : <h1 className='text-2xl font-medium text-center lg:text-3xl'>Info! There is no any item added by you</h1>
          }
        </div>
      </div>
        <PriceDetails />

    </section>
  )
}

export default Cart