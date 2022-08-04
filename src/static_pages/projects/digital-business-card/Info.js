import React, { Component } from 'react'
import logo from '../../../logo.svg'
import './Info.css'

class Info extends Component {
  render() {
    return (
      <div className='info'>
         <img src={logo} className="info--user-img" alt="logo"/>
         <h1 className="info--name">Biagio Piraino</h1>
         <h3 className="info--role">.Net Developer</h3>
         <small className="info--website">biagiopiraino.net</small>
      </div>
    );
  }
}

export default Info;
