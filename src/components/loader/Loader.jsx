import React from 'react'
import "./loader.css"

const Loader = () => {
  return (
    <div className='flex justify-center items-center w-[100vw] h-[100vh] absolute top-0 left-0 -z-10'>
      <div className="custom-loader"></div>
    </div>
  )
}

export default Loader