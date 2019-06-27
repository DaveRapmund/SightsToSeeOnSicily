import React, { Component } from 'react';
import $ from 'jquery';

class Jumbotron extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props)
    $('.jumbotron').css({
      "background-image": "url("+this.props.headingImg+")"
    })
  }

  render(){
    return(
      <div className="row jumbotron-row">
        <div className="col-12 jumbotron">
          <h2>
            <span className="part-1">SIGHTS </span>
            <span className="part-2">TO </span>
            <span className="part-3">SEE </span>
            <span className="part-4">ON </span>
            <span className="part-5">SICILY </span>
          </h2>
          <div className="fade-out"></div>
        </div>
      </div>
    )
  }
}

export default Jumbotron;
