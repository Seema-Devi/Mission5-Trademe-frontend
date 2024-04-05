import React from 'react'
import Hero from '../Components/Hero/Hero'
import Offers from '../Components/Offers/Offers'
import Newitems from '../Components/Newitems/Newitems'
import Popular from '../Components/Popular/Popular'
import Navbar2 from "../Components/Navbar2/Navbar2";


const product = () => {
  return (
    <div>
      <Hero/>
      <Navbar2 />
      <Offers/>
      <Newitems/>
     <Popular/>
    </div>
  )
}

export default product