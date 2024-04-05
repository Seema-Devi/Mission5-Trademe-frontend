import React, {  useRef, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import fav from '../assets/fav.png'
import com from '../assets/com.png'
import watch from '../assets/watch.png'
import Bid from '../assets/Bidding.png'
import myid from '../assets/mytrade.png'


const Navbar = () => {

  let [menu,setMenu] = useState("Home");
 
  const menuRef = useRef();

  return (
    
    <div className='nav'>
      
      <Link to='/' onClick={()=>{setMenu("Home")}} style={{ textDecoration: 'none' }} className="nav-logo">
       <p> <img src={logo} alt="logo" /></p>
        </Link>
     
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("bidding")}}><Link to='/bidding' style={{ textDecoration: 'none' }}><img src={Bid} alt="" />Bidding</Link>{menu==="bidding"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("compare")}}><Link to='/compare' style={{ textDecoration: 'none' }}><img src={com} alt="" />Compare</Link>{menu==="compare"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("comparelist")}}><Link to='/comparelist' style={{ textDecoration: 'none' }}><img src={com} alt="" />Compare List</Link>{menu==="comparelist"?<hr/>:<></>}</li>
        <li><Link to='/'onClick={()=>{setMenu("watchlist")}} style={{ textDecoration: 'none' }}><img src={watch} alt="" />Watchlist</Link>{menu==="watchlist"?<hr/>:<></>}</li>
        <li><Link to='/'onClick={()=>{setMenu("favourites")}} style={{ textDecoration: 'none' }}><img src={fav} alt="" />Favourites</Link>{menu==="favourites"?<hr/>:<></>}</li>        
        <li><Link to='/' onClick={()=>{setMenu("mytrademe")}} style={{ textDecoration: 'none' }}><img src={myid} alt="" />My Trade Me</Link>{menu==="mytrademe"?<hr/>:<></>}</li>
      </ul>
      
    </div>
  )
}

export default Navbar
