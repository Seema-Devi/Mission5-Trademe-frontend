import React from 'react'
import ProductList from '../Components/ProductList/ProductList'
import './CSS/Product.css'
import Navbar2 from "../Components/Navbar2/Navbar2";

const Compare = () => {
  return (
    <div>
       <Navbar2 />
      <p>Place bid by clicking <b>'Place bid'</b> Icon. You will get the Notification for the same on your registered E-mail</p>
      <ProductList/>
    </div>
  )
}

export default Compare;