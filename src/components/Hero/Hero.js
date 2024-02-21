import React from 'react'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
const Hero = () => {
    return (
        <div className='hero h-full flex   bg-gradient-to-r from-purple-100 to-pink-100 px-20'>
            <div className="hero-left flex-1 flex flex-col py-44 " >
                <h2 className='font-semibold  text-slate-900 text-2xl'>NEW ARRIVALS ONLY</h2>
                <div>
                    <div className="hero-hand-icon flex items-center gap-5">
                        <p className='text-slate-900 font-bold text-8xl leading-tight'>New</p>
                        <img className='w-24' src={hand_icon} alt="" />
                    </div>
                    <p className='text-8xl font-bold leading-tight'>Collection </p>
                    <p className='text-8xl font-bold leading-tight'>for everyone</p>
                </div>
                <div className="hero-latest-btn flex justify-center items-center gap-4 w-80 h-20 mt-4 rounded-full bg-pink-600 text-white text-xl font-bold">
                    <div>Latest Collection</div>
                    <img src={arrow_icon} alt="" />
                </div>
            </div>
            <div className="hero-right ">
                <img src={hero_image} alt="" />
            </div>
        </div>
    )
}

export default Hero
