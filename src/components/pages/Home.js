import React from 'react';
import Jumbotron from '../Jumbotron';
import Heading from '../Heading';
import CarouselRow from '../CarouselRow';
import SightsToBehold from '../SightsToBehold';
import data from '../../js/data.js';
import s1 from '../../images/s-5.jpg';

function Home(){
  const sightsProps = {
    sightsText: data.sicily.sightsText,
    sightsTitle: data.sicily.sightsTitle
  }

  const headingProps = ["sicily", data.sicily.heading];

  return(
    <div>
      <Jumbotron headingImg={s1}/>
      <div className="container-fluid">
        <Heading headingText={headingProps}/>
        <CarouselRow carouselText={data.sicily.carousel}/>
        <SightsToBehold information={sightsProps}/>
      </div>
    </div>
  )
}

export default Home;
