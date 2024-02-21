import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Items from '../Items/Items';
const ShopCategory = (props) => {
  const {all_product} =useContext(ShopContext);
  return (
    <div className='container mx-auto mt-5'>
      <img src={props.banner} alt="" />
      <div>
        <p className='mt-7'>
          <span className='font-bold'>Showing 1-12</span> out of 36 products
        </p>
      </div>
      <div className="collections grid grid-cols-4 gap-12 mt-16 ">
            {
                all_product.map((item,i)=>{
                  if(props.category=== item.category)
                  return<Items key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                  else{
                    return null;
                  }
                })
            }
        </div>
    </div>
  )
}

export default ShopCategory
