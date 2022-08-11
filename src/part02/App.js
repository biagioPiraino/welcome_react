import React, { Component } from 'react'
import Header from './Header'
import Meme from './Meme'
import Boxes from './challenges/boxes/Boxes'
import './App.css'

class App extends Component {
  render (){
    return (
      <div>
        {/* <Header />
        <Meme /> */}
        <Boxes />
      </div>
    );
  }
}

export default App;
