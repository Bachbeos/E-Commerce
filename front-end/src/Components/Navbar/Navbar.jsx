import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from './../Assets/Frontend_Assets/logo.png'
import cart_icon from './../Assets/Frontend_Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="logo" />
            <p>BACHCLOTHES</p>
        </div>

        <ul className="nav-menu">
            <li onClick={() => {setMenu("shop")}}><Link to='/' className='direction-pages-text'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("mens")}}><Link to='/mens' className='direction-pages-text'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("womens")}}><Link to='/womens' className='direction-pages-text'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={() => {setMenu("kids")}}><Link to='/kids' className='direction-pages-text'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        </ul>

        <div className="nav-login-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart_icon} alt="cart icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar