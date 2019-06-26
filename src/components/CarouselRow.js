import React from 'react';
import Carousel from './Carousel';

function CarouselRow(){
  const current_page = window.location.pathname;
  const current_page_clean = current_page.split("/")[1];

  return(
    <div>
      <div className="row cr-row">

        <div className="col-xl-6 cr-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Quisque eu ligula nulla. Mauris odio magna, iaculis ut tellus quis,
          posuere dictum mi. Maecenas nec nunc quis nisi ullamcorper facilisis
          vitae ut velit. Morbi tincidunt fringilla libero, nec pulvinar dui
          vestibulum ac. Donec tempus elementum porttitor. Fusce a elit
          bibendum, suscipit dolor eu, suscipit justo. Vivamus ultricies maximus
          nisi vel hendrerit. Pellentesque habitant morbi tristique senectus et
          netus et malesuada fames ac turpis egestas.
        </div>

        <div className="col-xl-6 cr-right">
          <Carousel page={current_page_clean} />
        </div>

      </div>
    </div>
  )
}

export default CarouselRow;
