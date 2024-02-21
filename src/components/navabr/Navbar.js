import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    return (
        <div className='navbar py-2 px-52 flex justify-between  items-center ' >
            <div className="nav-logo flex w-[25%]  ">
                <img src={logo} alt="" className='w-13 mr-3' />
                <p className='font-bold my-auto  text-xl'>SHOPPER</p>
            </div>
            <div className="nav-menu  w-[30%]">
                <ul className='flex justify-evenly items-center cursor-pointer'>
                    <li onClick={() => { setMenu("shop") }}><Link to='/'>Shop</Link> {menu === "shop" ? <hr className='border-none font-black  h-1 rounded-lg bg-red-600' /> : <></>}</li>
                    <li onClick={() => { setMenu("mens") }}> <Link to='/mens'>Men</Link>{menu === "mens" ? <hr className='border-none font-black  h-1 rounded-lg bg-red-600' /> : <></>}</li>
                    <li onClick={() => { setMenu("womens") }}> <Link to='/womens'>Women</Link>{menu === "womens" ? <hr className='border-none font-black  h-1 rounded-lg bg-red-600' /> : <></>}</li>
                    <li onClick={() => { setMenu("kids") }}><Link to='/kids'>Kids</Link> {menu === "kids" ? <hr className='border-none font-black  h-1 rounded-lg bg-red-600' /> : <></>}</li>
                </ul>

            </div>
            <div className="cart flex justify-center items-center w-[25%]">
                <Link to='login'> <button className='rounded-full px-10 py-3 border-2 mr-8'> Login</button></Link>
                
               < Link to='cart'> <img src={cart_icon} alt="" className='h-10' /></Link>
            </div>
        </div>
    )
}

export default Navbar
