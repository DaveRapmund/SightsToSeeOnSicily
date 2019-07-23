import React from 'react';
import Jumbotron from '../Jumbotron';
import Heading from '../Heading';
import CarouselRow from '../CarouselRow';
import SightsToBehold from '../SightsToBehold';
import data from '../../js/data';
import t1 from '../../images/t-5.jpg';

function Taormina(){
  const sightsProps = {
    sightsText: data.taormina.sightsText,
    sightsTitle: data.taormina.sightsTitle
  }

  const headingProps = ["taormina", data.taormina.heading];

  return(
    <div>
      <Jumbotron headingImg={t1}/>
      <div className="container-fluid">
        <Heading headingText={headingProps}/>
        <CarouselRow carouselText={data.taormina.carousel} />
        <SightsToBehold information={sightsProps}/>
      </div>
    </div>
  )
}

export default Taormina;
