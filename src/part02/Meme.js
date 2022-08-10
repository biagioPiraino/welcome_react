import React, { Component } from 'react'
import './Meme.css';

class Meme extends Component {
   render() {
      return (
         <main className='meme--main'>
            <form className='meme--form'>
               <input 
                  type='text'
                  className='form--inputs'
                  placeholder='Top text'
               />
               <input 
                  type='text'
                  className='form--inputs'
                  placeholder='Bottom text'
               />
               <button className='form--button'>Get a new meme image</button>
            </form>
         </main>   
      );
   }
}

export default Meme;