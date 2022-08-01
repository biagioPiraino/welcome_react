import React, { Component } from 'react'
import logo from '../../../logo.svg'
import './ReactFacts.css'

class ReactFacts extends Component {
   render() {
      return (
         <div className="React-facts">
            <div className="React-facts-header">
               <img src={logo} className="React-facts-logo" alt="logo"/>
            </div>
            <div className="React-facts-body">
               <h1>Fun facts about React</h1>
               <ul>
                  <li>Was first released in 2013</li>
                  <li>Was originally createdby Jordan Walke</li>
                  <li>Has well over 100K stars on GitHub</li>
                  <li>Is maintained by Facebook</li>
                  <li>Powers thousands of enterprise apps, including mobile apps</li>
               </ul>
            </div>
         </div>
      );
   }
}

export default ReactFacts;