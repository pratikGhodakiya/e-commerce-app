import React from 'react'
import Hero from '../Hero/Hero'
import Popular from '../Popular/Popular'
import Offers from '../Offers/Offers'
import NewCollection from '../NewCollections/NewCollection'
import NewsLetter from '../NewsLetter/NewsLetter'
import { ShopContext } from '../Context/ShopContext'

const Shop = () => {
  return (
    <div className='container mx-auto'>
      <Hero />
        <Popular />
        <Offers />
        <NewCollection /> 
        <NewsLetter />
        
    </div>
  )
}

export default Shop
