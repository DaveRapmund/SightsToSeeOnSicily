import React from 'react';
import Jumbotron from '../Jumbotron';
import Heading from '../Heading';
import CarouselRow from '../CarouselRow';
import SightsToBehold from '../SightsToBehold';
import data from '../../js/data.js';
import p1 from '../../images/p-1.jpg';

function Palermo(){
  const sightsProps = {
    sightsText: data.palermo.sightsText,
    sightsTitle: data.palermo.sightsTitle
  }

  const headingProps = ["palermo", data.palermo.heading];

  return(
    <div>
      <Jumbotron headingImg={p1}/>
      <div className="container-fluid">
        <Heading headingText={headingProps}/>
        <CarouselRow carouselText={data.palermo.carousel} />
        <SightsToBehold information={sightsProps}/>
      </div>
    </div>
  )
}

export default Palermo;
