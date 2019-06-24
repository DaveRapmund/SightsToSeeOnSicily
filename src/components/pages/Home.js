import React from 'react';
import Jumbotron from '../Jumbotron';
import Heading from '../Heading';
import CarouselRow from '../CarouselRow';
import SightsToBehold from '../SightsToBehold';
import SvgBackground from '../SvgBackground';


function Home(){
  return(
    <div>
      <h1>Home</h1>
      <Jumbotron />
      <Heading />
      <CarouselRow />
      <SightsToBehold />
      <SvgBackground />
    </div>
  )
}

export default Home;
