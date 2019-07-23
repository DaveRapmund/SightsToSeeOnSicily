import React from 'react';
import Jumbotron from '../Jumbotron';
import Heading from '../Heading';
import CarouselRow from '../CarouselRow';
import SightsToBehold from '../SightsToBehold';
import data from '../../js/data.js';
import c1 from '../../images/c-5.jpg';

function Cefalu(){
  const sightsProps = {
    sightsText: data.cefalu.sightsText,
    sightsTitle: data.cefalu.sightsTitle
  }

  const headingProps = ["cefalu", data.cefalu.heading];

  return(
    <div>
      <Jumbotron headingImg={c1}/>
      <div className="container-fluid">
        <Heading headingText={headingProps} />
        <CarouselRow carouselText={data.cefalu.carousel}/>
        <SightsToBehold information={sightsProps}/>
      </div>
    </div>
  )
}

export default Cefalu;
