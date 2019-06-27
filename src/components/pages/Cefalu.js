import React from 'react';
import Jumbotron from '../Jumbotron';
import Heading from '../Heading';
import CarouselRow from '../CarouselRow';
import SightsToBehold from '../SightsToBehold';
import SvgBackground from '../SvgBackground';
import data from '../../js/data.js';
import c1 from '../../images/c-5.jpg';


function Cefalu(){
  const sightsProps = {
    sightsText: data.cefalu.sightsText,
    sightsTitle: data.cefalu.sightsTitle
  }

  return(
    <div>
      <Jumbotron headingImg={c1}/>
      <div className="container-fluid">
        <Heading headingText={data.cefalu.heading} />
        <CarouselRow carouselText={data.cefalu.carousel}/>
        <SightsToBehold information={sightsProps}/>
        <SvgBackground />
      </div>
    </div>
  )
}

export default Cefalu;
