import React from 'react'

const NewsLetter = () => {
  return (
    <div className='newsletter  bg-gradient-to-t from-slate-100 to-pink-200 h-96 py-20 text-center '>
        <h1 className='font-semibold  text-4xl  text-gray-500'>Get Exclusive Offers On Your Email</h1>
        <p className='my-9 '>Subscribe to our newlatter and stay updated</p>
       <div className='  pl-5  flex items-center justify-between bg-white w-[730px] h-16 rounded-full border border-gray-600  text-center m-auto'>
       <input className=' w-96 mr-7 text-base rounded-full outline-none' type="email" placeholder='Enter your Email ID' />
        <button className='w-52 h-16 border border-black bord rounded-full bg-gray-500 text-white' >Subscribe</button>
       </div>
      
    </div>
  )
}

export default NewsLetter
