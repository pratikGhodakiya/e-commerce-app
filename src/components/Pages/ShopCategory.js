import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Assets/dropdown_icon.png'
import Items from '../Items/Items';
const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className='container mx-auto mt-5 '>
      <img src={props.banner} alt="" />
      <div className='flex justify-between items-center'>
        <p className='mt-7'>
          <span className='font-bold'>Showing 1-12</span> out of 36 products
        </p>
        <div className=' mt-7 border-2 rounded-full py-2 px-5 border-black flex justify-between items-center cursor-pointer '>
          Sort by <img className='w-4 ml-2  h-2' src={dropdown_icon} />
        </div>
      </div>
      <div className="collections grid grid-cols-4 gap-12 mt-16 ">
        {all_product.map((item, i) => {
          if (props.category === item.category)
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          else {
            return null;
          }
        })}
      </div>
      <div className=' flex justify-center mt-24'>
        <button className='py-3 px-8 bg-gray-300 rounded-full text-gray-800 '>Explore More</button>
      </div>
    </div>
  )
}

export default ShopCategory
