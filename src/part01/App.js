import React, { Component } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Card from './Card'

class App extends Component {
  //<Hero />
  render (){
    return (
      <div>
        <Navbar />
        <Card
          thumb={require('./swim.svg')}
          rating='5.0'
          review={6}
          country='USA'
          desc='Life lessons with Katie Zaferes'
          price={136}
        />
        <Card
          thumb={require('./wedding.svg')}
          rating='5.0'
          review={30}
          country='USA'
          desc='Learn wedding photography'
          price={125}
        />
        <Card
          thumb={require('./mbk.svg')}
          rating='4.8'
          review={2}
          country='USA'
          desc='Group Mountain Biking'
          price={50}
        />
      </div>
    );
  }
}

export default App;
