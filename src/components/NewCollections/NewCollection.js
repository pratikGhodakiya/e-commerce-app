import React from 'react'
import new_collection from '../Assets/new_collections'
import Items from '../Items/Items'
const NewCollection = () => {
  return (
    <div className=' my-11'>
        <h1 className='text-4xl text-center font-semibold '>NEW COLLECTIONS</h1>
        <hr  className='mx-auto h-1 rounded-xl bg-black mt-5  w-1/6'/>
        <div className="collections grid grid-cols-4 gap-12 mt-16 ">
            {
                new_collection.map((item,i)=>{
                    return<Items key ={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })
            }
        </div>
      
    </div>
  )
}

export default NewCollection
