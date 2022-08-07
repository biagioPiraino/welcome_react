import React, { Component } from 'react'
import './Navbar.css'
import logo from './airbnb-logo.svg'

class Navbar extends Component {
  render () {
    return (
      <nav className='navbar--main'>
        <img src={logo} className="navbar--logo" alt="logo"/>
      </nav>
    );
  }
}

export default Navbar;
