import React, { Component } from 'react'
import Info from './Info'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
         <Info />
         <About />
         <Interests />
         <Footer />
      </div>
    );
  }
}

export default App;
