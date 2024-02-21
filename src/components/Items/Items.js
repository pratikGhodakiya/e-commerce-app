import React from 'react'

const Items = (props) => {
  return (
    <div className='item scale-100 hover:scale-105 transition-all shadow-md p-10 '>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <div className="item-prices flex">
        <div className="item-prices-new mr-5 font-bold ">
            ${props.new_price}
        </div>
        <div className="item-prices-old line-through text-gray-600">
        ${props.old_price}

        </div>
      </div>
    </div>
  )
}

export default Items
