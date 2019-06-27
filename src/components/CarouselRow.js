import React from 'react';
import Carousel from './Carousel';

function CarouselRow(props){
  const current_page = window.location.pathname;
  const current_page_clean = current_page.split("/")[1];

  return(
    <div>
      <div className="row cr-row">

        <div className="col-xl-6 cr-left">{props.carouselText}</div>

        <div className="d-none col-xl-6 cr-right d-md-block">
          <Carousel page={current_page_clean} />
        </div>

      </div>
    </div>
  )
}

export default CarouselRow;
