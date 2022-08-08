import React, { Component } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'
import cardsData from './CardsData'
import './App.css'

class App extends Component {
  render (){

    const cards = cardsData.map(
      x => 
        <Card item={x}/>
     );

    return (
      <div>
        <Navbar />
        <Hero />
        <section className='cards--list'>
          {cards}
        </section>
      </div>
    );
  }
}

export default App;
