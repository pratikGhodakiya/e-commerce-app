import React from 'react'
import Exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='offers container mx-auto flex justify-evenly  bg-gradient-to-r from-purple-100 to-pink-100 px-20 items-center py-6'>
        <div className="offers-left">
        <h1 className='text-5xl font-bold'>Exclusive</h1>
        <h1 className='text-5xl font-bold my-5'>Offers For You</h1>
        <p className='font-bold'>ONLY ON BEST SELLERS PRODUCTS</p>
        <button className='py-3 px-8 bg-red-500 rounded-full text-white mt-5'> Check Now</button>
        </div>
        <div className="offers-right w-80">
            <img src={ Exclusive_image} alt="" />
        </div>
    </div>
  )
}

export default Offers
