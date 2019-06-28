import React, { Component } from 'react';
import $ from 'jquery';
import combined from '../js/imageImport';

class Heading extends Component{
  constructor(props){
    super();
    this.page = window.location.pathname;
    this.clean_page = this.page.split("/")[1];
    this.currentMap = null;

  }

  componentDidMount(){
    if(this.clean_page === ""){
      this.clean_page = "sicily";
      this.currentMap = 0;
    }else if(this.clean_page === "cefalu"){
      this.currentMap = 1;
    }else if(this.clean_page === "taormina"){
      this.currentMap = 2;
    }else if(this.clean_page === "palermo"){
      this.currentMap = 3;
    }

    $('.map').css({
      "background-image": "url("+combined.maps[this.currentMap]+")"
    })
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-md-8 col-12 d-sm-block">
            <h1 className="heading-title">
              <svg width="100px" height="100%">
                <line x1="10" y1="50%" x2="60" y2="50%" stroke="black" strokeWidth="3px" strokeLinecap="round"/>
              </svg>
              {this.props.headingText[0] === "cefalu" ? "cefalù" : this.props.headingText[0]}
              <svg width="100px" height="100%">
                <line x1="40" y1="50%" x2="90" y2="50%" stroke="black" strokeWidth="3px" strokeLinecap="round" />
              </svg>
            </h1>
          </div>
          <div className="d-none d-md-inline-block col-md-2 map"></div>
        </div>

        <div className="row">
          <div className="col-12 d-md-none map-vert"></div>
        </div>

        <div className="row">
          <div className="col-12">
            <h3>{this.props.headingText[1]}</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Heading;
