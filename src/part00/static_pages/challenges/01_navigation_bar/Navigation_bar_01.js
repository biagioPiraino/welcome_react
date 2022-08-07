import React, { Component } from 'react';
import './Navigation_bar_01.css';

class Navigation_bar_01 extends Component {
  render() {
    return (
      <div className="nav-bar-01">
        <nav className='nav-bar-01-navbar'>
            <h1>Website name</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
      </div>
    );
  }
}

export default Navigation_bar_01;