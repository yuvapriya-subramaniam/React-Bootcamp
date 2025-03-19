import React from "react";
import "./Header.css";
import {useState} from 'react'

const Header = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  const updateLogin = () => {
    loggedIn ? setLoggedIn(false) : setLoggedIn(true)
  }
  
  return (
    <header id="headerContainer" className="header">
      <p id="headerTitle" className="title">
        Dine@Home
      </p>
      <ul id="menuContainer" className="header">
        <li>Home</li>
        <li>Contact</li>
        <li>Cart</li>
        <li><input type="button" onClick={updateLogin} value={loggedIn ? "Hello" : "Login"} /></li>
      </ul>
    </header>
  );
};

export default Header;
