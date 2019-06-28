import React, { Component } from 'react';
import $ from 'jquery';
import images from '../js/imageImport.js';

class Carousel extends Component{
  constructor(props){
    super(props);
    this.degrees = 0;
    if(this.props.page === ""){
      this.current_page = "sicily"
    }else{
      this.current_page = this.props.page;
    }
  }

  componentDidMount(){
    $('.next').on('click', { clicked: 'next' }, this.changeImage);
    $('.prev').on('click', { clicked: 'prev' }, this.changeImage);
  }

  changeImage = (e) => {
    if(e.data.clicked === 'next'){
      this.degrees = this.degrees - 60;
    }else{
      this.degrees = this.degrees + 60;
    }
    $('.carousel').css({
      "transform": "rotateY("+this.degrees+"deg)"
    })
  }

  render(){
    return(
      <div>
        <div id="carousel-container">
          <div className="carousel">
            <div id="image-1"><img src={images[this.current_page][0]} /></div>
            <div id="image-2"><img src={images[this.current_page][1]} /></div>
            <div id="image-3"><img src={images[this.current_page][2]} /></div>
            <div id="image-4"><img src={images[this.current_page][3]} /></div>
            <div id="image-5"><img src={images[this.current_page][4]} /></div>
            <div id="image-6"><img src={images[this.current_page][5]} /></div>
          </div>
          <div className="button-row">
          <li className="prev">&#171;</li>
          <li className="next">&#187;</li>
          </div>
        </div>
      </div>
    )
  }
}

export default Carousel;
