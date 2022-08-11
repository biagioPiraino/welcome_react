import React, { Component } from "react";
import './Boxes.css';
import data from './data'


class Boxes extends Component {
   constructor(props) {
      super(props);
      this.state = 
      {
         boxes: data
      };
      this.updateColor = this.updateColor.bind(this);
      this.styles = this.styles.bind(this);
   }
   
   updateColor(index){
      let a = this.state.boxes;
      a[index].display = !this.state.boxes[index].display;

      this.setState({
         boxes: a
      });
   }

   styles = (d) => {
      return {
         backgroundColor: d ? "black" : "gray"
      }};
   
   render() {
      const display = this.state.boxes.map(
         (x, index) => 
            <div 
               key={x.id} 
               style={this.styles(x.display)}
               onClick={() => this.updateColor(index)} 
               className="box">
            </div>
      )

      return (
         <main className="main">
            {display}
         </main>
      )
   }
}

export default Boxes;