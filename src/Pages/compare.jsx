import React from 'react'
import Allproduct from '../Components/Allproduct/Allproduct'
import './CSS/Product.css'
import Navbar2 from "../Components/Navbar2/Navbar2";

const Compare = () => {
  return (
    <div>
       <Navbar2 />
      <p>Compare products effortlessly by clicking <b>'Add to compare'</b> for each one you'd like to include.<br/>Once selected, you can view them all together in the <b> 'Compare List'</b>.</p>
      <h2>Home & living</h2>
      <p></p>
      <hr/>
      <Allproduct/>
    </div>
  )
}

export default Compare;