import React, { Component } from 'react'
import './CustomComponents.css'
import logo from '../../../logo.svg'

class CustomComponents extends Component {
   render() {
      return (
         <React.Fragment>
            <header className='site-header'>
               <nav className='navbar'>
                  <img src={logo} className="react-logo" alt="logo"/>
                  <ul className='navbar-items'>
                      <li>Pricing</li>
                      <li>About</li>
                      <li>Contact</li>
                  </ul>
               </nav>
            </header>
            <body className='cust-body'>
              <h1>Reasons why I'm excited to learn React</h1>
              <ol>
                 <li>Its's a popular libray</li>
                 <li>Its's hireable</li>
              </ol>
            </body>
            <footer className='cust-footer'>
               <small>@ 2022 Piraino development. All rights reserved</small>
            </footer>
         </React.Fragment>
      );
   }
}

export default CustomComponents;
