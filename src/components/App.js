import React, { Component } from 'react';
import '../scss/style.scss';

import Navbar from './Navbar';
import Jumbotron from './Jumbotron';
import Heading from './Heading';
import CarouselRow from './CarouselRow';
import SightsToBehold from './SightsToBehold';
import SvgBackground from './SvgBackground';

class App extends Component{
  render(){
    return(
      <div className="container-fluid">
        <Navbar />
        <Jumbotron />
        <Heading />
        <CarouselRow />
        <SightsToBehold />
        <SvgBackground />
      </div>
    )
  }
}

export default App;
