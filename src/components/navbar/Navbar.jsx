import { Link } from 'react-router-dom'
import { MdHome, MdOutlineSort } from "react-icons/md"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import shop_logo from "../../../public/favicon.png"

const Navbar = () => {

    const [show, setShow] = useState(false);

    const clickHandler = () => {
        setShow(!show);
    }

    const items = useSelector(state=>state.cartItems);
    let totalItems = 0;
    items.forEach(ele=>{
        totalItems+=ele.quantity;
    })

    return (
        <header className={`sticky top-0 left-0 w-full z-20 ${!show ? 'overflow-hidden':'overflow-visible'}`}>

            <nav className='bg-indigo-600 py-2 px-4 text-white sm:py-3 sm:px-6'>

                <main className='flex items-center justify-between'>

                    <div className='flex items-center space-x-2 sm:text-xl sm:font-bold'>
                        <img className='w-7 rounded-lg' src={shop_logo} alt="shop_logo" />
                        <h1>MyProductStore</h1>
                    </div>

                    <button onClick={clickHandler} className='bg-purple-500 active:bg-purple-400 rounded-full p-[3px] text-md sm:hidden'>
                        <MdOutlineSort />
                    </button>

                    <ul className={`py-2 px-4 absolute top-10 left-0 w-full bg-indigo-500 flex-col ${!show ? 'translate-x-full transition-all duration-[1000ms] ease-linear ' : ' translate-x-0 transition-all duration-[1000ms] ease-linear'} space-y-3 rounded-b-lg sm:translate-x-0 sm:py-0 sm:space-y-0 sm:flex sm:flex-row sm:w-fit sm:relative sm:bg-indigo-600 sm:top-0 sm:left-0 sm:space-x-5 sm:rounded-none`}>

                        <li onClick={clickHandler} className='active:bg-indigo-400'>
                            <Link to={"/"} className='flex items-center space-x-1'>
                                <MdHome />
                                <span>Home</span>
                            </Link>
                        </li>

                        <li onClick={clickHandler} className='active:bg-indigo-400'>
                            <Link to={"/cart"} className='flex items-center space-x-1 relative'>
                                <span className='absolute bg-black rounded-full px-1 text-[9px] -top-[2px] -left-[2px]'>{totalItems}</span>
                                <AiOutlineShoppingCart />
                                <span>Cart</span>
                            </Link>
                        </li>

                    </ul>

                </main>

            </nav>

        </header>
    )
}

export default Navbar