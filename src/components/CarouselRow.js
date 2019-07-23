import React from 'react';
import Carousel from './Carousel';
import images from '../js/imageImport.js';

function CarouselRow(props){
  const current_page = window.location.pathname;
  let current_page_clean = current_page.split("/")[1];

  if(current_page_clean === ""){
    current_page_clean = "sicily";
  }

  return(
    <div>
      <div className="row cr-row">
        <div className="col-xl-6 cr-left">{props.carouselText}</div>
        <div className="d-none col-xl-6 cr-right d-md-block">
          <Carousel page={current_page_clean} />
        </div>
      </div>

      <div className="row d-md-none sc-images">
          <img className="mb-2" alt="" src={images[current_page_clean][0]} />
          <img className="mb-2" alt="" src={images[current_page_clean][1]} />
          <img className="mb-2" alt="" src={images[current_page_clean][2]} />
          <img className="mb-2" alt="" src={images[current_page_clean][3]} />
          <img className="mb-2" alt="" src={images[current_page_clean][4]} />
          <img className="mb-2" alt="" src={images[current_page_clean][5]} />
      </div>
    </div>
  )
}

export default CarouselRow;
