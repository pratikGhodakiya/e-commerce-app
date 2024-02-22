import React from 'react'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const {product}= props;
  return (
    <div className='breadcrum flex items-center my-14 container mx-auto'>
      HOME <img className='mx-2 w-3 h-4' src={arrow_icon} alt="" />SHOP <img className='mx-2 w-3 h-4' src={arrow_icon} alt="" /> {product.category} <img className='mx-2 w-3 h-4' src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
