import React from 'react'
import { useSelector } from 'react-redux';

const PriceDetails = () => {

  const cartItems = useSelector(state => state.cartItems);
  const items = cartItems.length;

  let totalPrice = 0;

  cartItems.map(ele=>{
    const itemsPrice = ele.price*ele.quantity;
    totalPrice+=itemsPrice; 
  })


    return (
        <div className='h-[40vh] bg-purple-700 w-full rounded-t-xl text-white px-10 py-5 space-y-5 sm:p-0 sm:static sm:pr-20 sm:pl-10 box-border flex flex-col justify-center sm:bg-white sm:text-black sm:w-[40vw] sm:h-auto sm:justify-start'>
            <h2 className='text-lg font-medium sm:text-xl sm:text-slate-500'>Price Details</h2>

            <ul className='text-sm sm:text-md'>
                <li className='flex justify-between'>
                    <span>Price ({items} items)</span>
                    <span>${totalPrice.toFixed(2)}</span>
                </li>

                <li className='flex justify-between'>
                    <span>Discount</span>
                    <span className='text-green-400 sm:text-green-600'>− ${0}</span>
                </li>

                <li className='flex justify-between'>
                    <span>Delivery Charges</span>
                    <span className='text-green-400 sm:text-green-600'>Free</span>
                </li>
            </ul>

            <div className='flex justify-between font-medium text-lg'>
                <span>Total Amount</span>
                <span>${totalPrice.toFixed(2)}</span>
            </div>

            <div className='text-green-400 sm:text-green-600 font-medium'>
                You will save ${0} on this order
            </div>
        </div>
    )
}

export default PriceDetails