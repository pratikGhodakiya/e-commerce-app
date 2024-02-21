import React from 'react'
import data_product from '../Assets/data'
import Item from '../Items/Items'

const Popular = () => {
  return (
    <div className='popular  py-40 '>
        <h1 className='text-4xl text-center font-semibold  ' > POPULAR IN WOMEN </h1>
        <hr className=' mx-auto h-1 mt-5 rounded-xl bg-black  w-1/6' />
        <div className="popular-item grid grid-cols-4 gap-5  mt-12">
           {data_product.map((item,i)=>{
            return<Item key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
           })} 
        </div>

       
    </div>
  )
}

export default Popular
