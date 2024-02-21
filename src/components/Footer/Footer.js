import React from 'react'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='justify-center items-center flex py-20  container mx-auto px-48' >

      <div className='w-1/2 text-center'>
        <div className="footer-logo flex items-center justify-center">
          <img className='w-20' src={footer_logo} alt="" />
          <p className='font-semibold text-3xl'>SHOPPER</p>
        </div>
        <ul className='justify-between flex my-10  items-center cursor-pointer ' >
          <li className='mr-2'>Company</li>
          <li className='mr-2'>Products</li>
          <li className='mr-2'>Offices</li>
          <li className='mr-2'>About</li>
          <li className='mr-2'>Contact</li>
        </ul>
        <div className="footer-social-icon flex justify-center items-center my-12 ">
          
            <img  src={instagram_icon} alt="" />
        
            <img className='mx-5' src={pintester_icon} alt="" />
         
          
            <img src={whatsapp_icon} alt="" />
          
        </div>
        <div>
          <hr />
          <p>Copyright @ 2023 - All Right Reserved.</p>
        </div>
      </div>

    </div>
  )
}

export default Footer
