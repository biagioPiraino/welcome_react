import React, { Component } from 'react'
import './Card.css'
import star from './star.svg'

function defineBedgeText(props) {
   if (props.item.openSpots === 0) {
      return "SOLD OUT";
   }
   else if (props.item.country === "Online") {
      return "ONLINE";
   }
   else {
      return "";
   }
}

class Card extends Component {

   render () {
     
      /* {this.props.openSpots === 0 && <div className='card--bedge'>SOLD OUT</div>} 
       * This is a conditional operator that means that the div will be only diplayed if
       * the props.openSpots === 0 */
      let bedgeText = defineBedgeText(this.props);

      return (
         <div className="card">
            {(this.props.item.openSpots === 0 || this.props.item.country === "Online") && 
               <div className='card--bedge'>{bedgeText}</div>} 
            <img className='card--img' src={this.props.item.thumb} alt='card-image'/>
            <div className='card--stats'>
               <img className='start--img' src={star} alt='star-image'/>
               <span> {this.props.item.rating}</span>
               <span className='faded'> ({this.props.item.review}) - </span>
               <span className='faded'>{this.props.item.country}</span>
            </div>
            <p>{this.props.item.desc}</p>
            <p><span className='bold'>From ${this.props.item.price}</span> / person</p> 
         </div>
      );
   }
}

export default Card;