import React, { Component } from 'react'
import hero from './hero.svg'
import './Hero.css'

class Hero extends Component {
  render () {
    return (
      <section className='hero'>
        <img src={hero} className="hero--img" alt="logo"/>
        <h1 className='hero--header'>Online Experiences</h1>
        <p className='hero--paragraph'>
          Join unique interactive activities led by 
          one-of-a-kind hosts—all without leaving home.
        </p>
      </section>
    );
  }
}

export default Hero;
