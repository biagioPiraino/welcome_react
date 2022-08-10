import React, { Component } from 'react'
import './Header.css'
import logo from './troll.svg'

class Header extends Component {
  render () {
    return (
      <header className='header--main'>
          <img src={logo} className="header--logo" alt="logo"/>
          <h2 className='header--header' id='header'>Meme Generator</h2>
          <p className='header--header' id='sub-header'>React Course - Project 02</p>
      </header>
    );
  }
}

export default Header;
