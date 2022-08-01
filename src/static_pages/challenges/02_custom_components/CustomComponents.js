import React, { Component } from 'react'
import logo from '../../../logo.svg'

class CustomComponents extends Component {
   render() {
      return (
         <React.Fragment>
            <header>
               <nav>
                  <img src={logo} className="React-facts-logo" alt="logo" width="70px"/>
               </nav>
            </header>
            <h1>Reasons why I'm excited to learn React</h1>
            <ol>
               <li>Its's a popular libray</li>
               <li>Its's hireable</li>
            </ol>
            <footer>
               <small>@ 2022 Piraino development. All rights reserved</small>
            </footer>
         </React.Fragment>
      );
   }
}

export default CustomComponents;