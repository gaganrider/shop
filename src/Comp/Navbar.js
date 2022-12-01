import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navl">
        <h3>Home</h3>
<h3>Cart</h3>
      </div>
      <div className="navm"> Shopify </div>
      <div className="navr">
        <h3>Register</h3>
        <h3>Sign In</h3>
      </div>
    </div>
  )
}

export default Navbar
