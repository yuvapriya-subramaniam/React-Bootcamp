import React from 'react'
import "./Header.css"

const Header = () => {
    return (
      <header id="headerContainer" className="header">
        {/* <img id="logo" src={logo} className="header" /> */}
        <p>Dine@Home</p>
        <ul id="menuContainer" className="header">
          <li>Home</li>
          <li>About us</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </header>
    )
  }

export default Header