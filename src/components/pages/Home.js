import React from 'react';
import Jumbotron from '../Jumbotron';
import Heading from '../Heading';
import CarouselRow from '../CarouselRow';
import SightsToBehold from '../SightsToBehold';
import SvgBackground from '../SvgBackground';


function Home(){
  return(
    <div>
      <Jumbotron />
      <div className="container-fluid">
        <Heading />
        <CarouselRow />
        <SightsToBehold />
        <SvgBackground />
      </div>
    </div>
  )
}

export default Home;
