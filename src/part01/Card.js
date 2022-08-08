import React, { Component } from 'react'
import './Card.css'
import star from './star.svg'

class Card extends Component {
   render () {
      return (
         <div className="card">
            <img className='card--img' src={this.props.thumb} alt='card-image'/>
            <div className='card--stats'>
               <img className='start--img' src={star} alt='star-image'/>
               <span> {this.props.rating}</span>
               <span className='faded'> ({this.props.review}) - </span>
               <span className='faded'>{this.props.country}</span>
            </div>
            <p>{this.props.desc}</p>
            <p><span className='bold'>From ${this.props.price}</span> / person</p> 
         </div>
      );
   }
}

export default Card;