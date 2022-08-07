import React, { Component } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'

class App extends Component {
  render (){
    return (
      <div>
        <Navbar />
        <Hero />
      </div>
    );
  }
}

export default App;
