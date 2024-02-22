import React, { useEffect } from 'react'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"

const ProductDisplay = (props) => {
    const {product}=props;
    useEffect(()=>{
      window.scrollTo(0,0);
    },[])
  return (
    <div className='product-display flex gap-10 container mx-auto'>
      <div className="product-display-left flex flex-1">
            <div className="product-display-img-list">
                <img className='w-40 h-40 mb-4' src={product.image} alt="" />
                <img  className='w-40 h-40 mb-4' src={product.image} alt="" />
                <img  className='w-40 h-40 mb-4' src={product.image} alt="" />
                <img  className='w-40 h-40' src={product.image} alt="" />
            </div>
            <div className="productdisplay-img ml-4">
                <img className='productdisplay-main-img h-full ' src={product.image} alt="" />
            </div>
      </div>


      <div className="product-display-right flex-1 pr-20">
        <h1 className='font-semibold text-4xl leading-tight'>{product.name}</h1>
        <div className='product-display-right-start flex items-center my-4'>
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
            <p>(122)</p>
        </div>
        <div  className='product-display-right-prices flex items-center my-5 gap-4 font-semibold text-2xl'>
            <div className="right-old-price line-through text-gray-600">${product.old_price}</div>
            <div className="right-new-price text-orange-600">${product.new_price}</div>
        </div>
        <div className="description my-10">
          A Lightweight, usually kinitted, pullover shirt, close-fitting and winds a round neckline and short sleeves, worn as an undershirt or oute garment.
        </div>
        <div className="size font-semibold text-gray-600 ">
          <h1>Select Size</h1>
          <div className="product-size flex items-center gap-5 my-5">
            <div className='h-12 w-12 border bg-gray-200 border-gray-600 flex items-center justify-center '>S</div>
            <div className='h-12 w-12 border border-gray-600 bg-gray-200 flex items-center justify-center '>M</div>
            <div className='h-12 w-12 border border-gray-600 bg-gray-200 flex items-center justify-center '>L</div>
            <div className='h-12 w-12 border border-gray-600 bg-gray-200 flex items-center justify-center '>XL</div>
            <div className='h-12 w-12 border border-gray-600 bg-gray-200 flex items-center justify-center '>XXL</div>
          </div>
        </div>
        <button className='my-6 bg-red-600 py-3 px-8 text-white'>ADD TO CART</button>
        <p className='my-2'><span className='font-bold '>Category :  </span>  Women, T-Shirt, Crop Top</p>
        <p><span className='font-bold '>Tags :  </span>  Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
