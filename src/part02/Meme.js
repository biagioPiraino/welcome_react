import React, { Component } from 'react'
import memes from './memesData'
import './Meme.css';

class Meme extends Component {
   constructor(props) {
      super(props);
      this.state = {image: {}};
      this.getRandomImage = this.getRandomImage.bind(this);
      this.resizeHeight = this.resizeHeight.bind(this.resizeHeight);
   }

   resizeHeight() {
      let originalRatio = 
         this.state.image.width / this.state.image.height;
      this.setState ({
         image: {
            height: this.state.height,
            width: 700 / originalRatio,
            src : this.state.src
         }  
      }); 
   }

   getRandomImage() {
      let randomIndex = Math.round(Math.random() * 100);
      let {url, width, height} = memes.data.memes[randomIndex];
      this.setState({
         image: {
            height: height,
            width: width,
            src : url
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
            <div >
               {this.state.image.src !== undefined &&
                <img
                  className='meme--pic'
                  width={700}
                  height={this.resizeHeight}
                  src={this.state.image.src} 
                  alt='meme'/>}
            </div>
         </main>   
      );
   }
}

export default Meme;