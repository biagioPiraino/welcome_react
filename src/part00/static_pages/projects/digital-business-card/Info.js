import React, { Component } from 'react'
import profilepic from '../../../profilepic.jpeg'
import './Info.css'

class Info extends Component {
  render() {
    return (
      <div className='info'>
          <img src={profilepic} className="info--user-img" alt="img-profilepic"/>
          <h1 className="info--name">Biagio Piraino</h1>
          <h3 className="info--role">.Net Developer</h3>
          <small className="info--website">biagiopiraino.net</small>
          <div className="info--button-section">
            <button className="info--button" id='email'>Email</button>
            <button className="info--button" id='linkedin'>LinkedIn</button>
          </div>
      </div>
    );
  }
}

export default Info;
