import React from 'react';
import Jumbotron from '../Jumbotron';
import Heading from '../Heading';
import CarouselRow from '../CarouselRow';
import SightsToBehold from '../SightsToBehold';
import SvgBackground from '../SvgBackground';


function Palermo(){
  return(
    <div>
      <h1>Palermo</h1>
      <Jumbotron />
      <Heading />
      <CarouselRow />
      <SightsToBehold />
      <SvgBackground />
    </div>
  )
}

export default Palermo;
