import React, { Component } from 'react'
import memes from './memesData'
import './Meme.css';

class Meme extends Component {
   constructor(props) {
      super(props);
      this.state = 
      {
         image: {
            src: "https://i.imgflip.com/1bgw.jpg",
            topText: '',
            bottomText: ''
         },

         allMemeImages : memes.data.memes.filter(x => x.box_count === 2)
      };
      this.getRandomImage = this.getRandomImage.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }

   getRandomImage() {
      let data = this.state.allMemeImages;
      let randomIndex = Math.floor(Math.random() * data.length);
      let {url} = data[randomIndex];
      
      this.setState({
         image: {
            ...this.state.image,
            src : url,
         }  
      });
   }

   handleChange(event) {
      const {name, value} = event.target;
      this.setState({
         image: {
            ...this.state.image,
            [name] : value,
         }  
      });
   }

   render() {
      return (
         <main className='meme--main'>
            <div className='meme--form'>
               <input 
                  type='text'
                  name='topText'
                  className='form--inputs'
                  placeholder='Top text'
                  onChange={this.handleChange}
                  value={this.state.image.topText}
               />
               <input
                  type='text'
                  name='bottomText'
                  className='form--inputs'
                  placeholder='Bottom text'
                  onChange={this.handleChange}
                  value={this.state.image.bottomText}
               />
               <button
                  onClick={this.getRandomImage} 
                  className='meme--form--button'>
                     Get a new meme image
               </button>
            </div>
            <div className='image--section'>
               {
                  this.state.image.src !== '' &&
                  <img
                     className='image--actual'
                     src={this.state.image.src} 
                     alt='meme'/>
               }
               <h2 className='top--text'>{this.state.image.topText}</h2>
               <h2 className='bottom--text'>{this.state.image.bottomText}</h2>
            </div>
         </main>   
      );
   }
}

export default Meme;