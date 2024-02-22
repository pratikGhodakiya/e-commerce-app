import React from 'react'

const LoginSignup = () => {
  return (
    <div className=' mx-auto w-[100%] h-[80vh] bg-pink-100 pt-24 '>
      <div className='w-[580px] bg-white  m-auto py-16 px-10'>
        <h1 className='font-semibold text-2xl mb-5'>Sign Up</h1>
        <div className="loginsignup-fields flex-col flex ">
          <input className='border py-3 px-2 mb-5 rounded-lg outline-gray-500' type="text" placeholder=' Enter Your Name' />
          <input className='border py-3 px-2 mb-5 rounded-lg outline-gray-500' type="email" placeholder=' Enter Your EmailID' />
          <input className='border py-3 px-2 mb-5 rounded-lg   outline-gray-500'  type="password" placeholder=' Enter Your Password' />
        </div>
        <button className='bg-red-500 w-full rounded-lg  text-white py-3 mb-5'>Continue</button>
        <p className='text-sm mb-4'> Already have an account? <span className='text-red-600 mb-4 text-sm'>Login here</span></p>
        <div className='flex text-sm'>
          <input type="checkbox" name='' id='' />
          <p className='ml-2'>By Continuing, i agree to the terms of use  & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
