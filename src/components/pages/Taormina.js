import React from 'react';
import Jumbotron from '../Jumbotron';
import Heading from '../Heading';
import CarouselRow from '../CarouselRow';
import SightsToBehold from '../SightsToBehold';
import SvgBackground from '../SvgBackground';


function Taormina(){
  return(
    <div>
      <h1>Taormina</h1>
      <Jumbotron />
      <Heading />
      <CarouselRow />
      <SightsToBehold />
      <SvgBackground />
    </div>
  )
}

export default Taormina;
