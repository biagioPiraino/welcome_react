import React, { Component } from 'react'
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
         allMemeImages : []
      };
      this.memeSource = "https://api.imgflip.com/get_memes";
      this.getRandomImage = this.getRandomImage.bind(this);
      this.handleChange = this.handleChange.bind(this);
   }

   componentDidMount() {
      fetch(this.memeSource)
         .then(res => res.json())
         .then(data => this.setState({
            
            /* Here you can directly access the property of the object returned
             * saving the result obtained in an array form rather than object.
             * Following this approach will depends on your need. Objects 
             * may contain some useful info / metadata. Suggestion, look at 
             * the data structure first and try to udnerstand if importing 
             * the object can be valueable or not*/

            allMemeImages: data.data.memes})) 
         .catch(error => console.log(error));
   }
   
   componentWillUnmount() {
      this.setState({
         allMemeImages: []
      })
   }

   getRandomImage() {
      const memesSource = this.state.allMemeImages;
      
      if (memesSource.length > 0){
         const filteredMemes = memesSource.filter(x => x.box_count === 2);
         const randomIndex = Math.floor(Math.random() * filteredMemes.length);
         const {url} = filteredMemes[randomIndex];

         this.setState({
            image: {
               ...this.state.image,
               src : url,
            }
         });
      }
   }

   handleChange(e) {
      const {name, value} = e.target;
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