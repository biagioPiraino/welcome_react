import React, { Component } from 'react'
import memes from './memesData'
import './Meme.css';

class Meme extends Component {
   constructor(props) {
      super(props);
      this.state = 
      {
         image: {
            src: '',
            topText: '',
            bottomText: ''
         },

         allMemeImages : memes.data.memes.filter(x => x.box_count === 2)
      };
      this.getRandomImage = this.getRandomImage.bind(this);
   }

   getRandomImage() {
      let data = this.state.allMemeImages;
      let randomIndex = Math.floor(Math.random() * data.length);
      let {url} = data[randomIndex];
      
      this.setState({
         image: {
            src : url,
         }  
      });
   }

   render() {
      return (
         <main className='meme--main'>
            <div className='meme--form'>
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
               <button
                  onClick={this.getRandomImage} 
                  className='form--button'>
                     Get a new meme image
               </button>
            </div>
            <section className='image--section'>
               {
                  this.state.image.src !== '' &&
                  <img
                     className='image--actual'
                     src={this.state.image.src} 
                     alt='meme'/>
               }
            </section>
         </main>   
      );
   }
}

export default Meme;