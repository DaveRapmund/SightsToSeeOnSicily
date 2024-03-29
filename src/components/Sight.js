import React, { Component } from 'react';
import $ from 'jquery';

class Sight extends Component{
  constructor(props){
    super(props);
    this.clickCounter = 0;
  }

  changeOverlay = (e) => {
    if(this.clickCounter === 0){
      $(e.currentTarget).css({
        "height": "100%"
      })
      this.clickCounter++;
    }else{
      $(e.currentTarget).css({
        "height": "20%"
      })
      this.clickCounter--;
    }
  }

  render(){
    return(
      <div className="sight mb-2">
        <div className="overlay" onClick={this.changeOverlay}>
          <h5>{this.props.page.title}</h5>
          <p>{this.props.page.text}
          </p>
        </div>
        <img alt="" src={this.props.page.image} />
      </div>
    )
  }
}

export default Sight;
