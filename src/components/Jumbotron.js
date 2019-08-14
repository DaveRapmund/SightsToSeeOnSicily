import React, { Component } from 'react';
import $ from 'jquery';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class Jumbotron extends Component{
  componentDidMount(){
    $('.jumbotron').css({
      "background-image": "url("+this.props.headingImg+")"
    })
  }

  render(){
    return(
      <TransitionGroup>
        <CSSTransition in={true} appear={true} timeout={500} classNames="jt">
          <div className="row jumbotron-row">
            <div className="col-12 jumbotron">
              <CSSTransition in={true} appear={true} timeout={1000} classNames="it">
                <h2>
                  <span className="part-1">SIGHTS </span>
                  <span className="part-2">TO </span>
                  <span className="part-3">SEE </span>
                  <span className="part-4">ON </span>
                  <span className="part-5">SICILY </span>
                </h2>
              </CSSTransition>
              <div className="fade-out"></div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    )
  }
}

export default Jumbotron;
