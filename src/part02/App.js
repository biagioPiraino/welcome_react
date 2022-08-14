import React, { Component } from 'react'
import Header from './Header'
import Meme from './Meme'
import Boxes from './challenges/boxes/Boxes'
import Form from '../form-prototype/Form'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formInfo: {
        userName: '',
        email: '',
        password: ''
      }
    };
    this.handleFormInputChanges = this.handleFormInputChanges.bind(this);
  }

  handleFormInputChanges(event) {
    this.setState({
      formInfo: {
        ...this.state.formInfo,
        [event.target.name]: event.target.value}
    });
  }

  render (){
    const formInputs = [
        {
          type:'text',
          placeholder:'Username',
          name:'userName'
        },
        {
          type:'text',
          placeholder:'Email',
          name:'email'
        },
        {
          type:'password',
          placeholder:'Password',
          name:'password'
        }
      ]

    return (
      <div>
        {/* <Header />
        <Meme /> */}
        {/* <Boxes /> */}
        <Form
          inputs={formInputs}
          onInputChange={this.handleFormInputChanges}
          buttonLabel="Submit"
        />
      </div>
    );
  }
}

export default App;
