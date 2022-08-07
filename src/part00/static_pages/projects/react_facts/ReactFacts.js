import React, { Component } from 'react'
import Navbar from './Navbar'
import Main from './Main'

class ReactFacts extends Component {
   render() {
      return (
        <div>
          <Navbar />
          <Main />
        </div>
      );
   }
}

export default ReactFacts;
