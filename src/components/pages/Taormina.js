import React from 'react';
import Jumbotron from '../Jumbotron';
import Heading from '../Heading';
import CarouselRow from '../CarouselRow';
import SightsToBehold from '../SightsToBehold';
import SvgBackground from '../SvgBackground';


function Taormina(){
  return(
    <div>
      <Jumbotron />
      <div className="container-fluid">
        <h1>Taormina</h1>
        <Heading />
        <CarouselRow />
        <SightsToBehold />
        <SvgBackground />
      </div>
    </div>
  )
}

export default Taormina;
