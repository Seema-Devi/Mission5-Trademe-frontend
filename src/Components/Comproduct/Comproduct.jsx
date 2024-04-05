import React from 'react'
import './Comproduct.css'
import product from '../assets/product'
import ComItem from '../CompareItems/CompareItems'

const Comproduct = () => {
  return (
    <div className='popular'>
    
      <div className="popular-item">
        {product.map((item,i)=>{
            return <ComItem key={i} id={item.id} name={item.name} image={item.image}  new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default Comproduct;
