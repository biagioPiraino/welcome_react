import React, { Component } from 'react'
import hero from './hero.svg'
import './Hero.css'

class Hero extends Component {
  render () {
    return (
      <section className='hero'>
        <img src={hero} className="hero--img" alt="logo"/>
        <h1 className='hero--header'>Header</h1>
        <p className='hero--paragraph'>Here a paragraph</p>
      </section>
    );
  }
}

export default Hero;
