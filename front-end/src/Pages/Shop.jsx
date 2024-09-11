import React from 'react'
import BannerFirst from '../Components/BannerFirst/BannerFirst'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <BannerFirst/>
        <Popular/>
        <Offers/>
        <NewCollections />
        <NewsLetter />
    </div>
  )
}

export default Shop