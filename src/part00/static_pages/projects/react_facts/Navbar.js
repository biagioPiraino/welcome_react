import logo from '../../../logo.svg'
import React, { Component } from 'react'
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-react-facts">
         <img src={logo} className="react-facts-logo" alt="logo"/>
         <h3 className="navbar-header">ReactFacts</h3>
         <h4 className="navbar-header-right">React Course - Project 00</h4>
      </nav>
    );
  }
}

export default Navbar;
