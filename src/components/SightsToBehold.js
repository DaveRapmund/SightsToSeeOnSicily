import React from 'react';
import Sight from './Sight';
import combined from '../js/imageImport.js';

function SightsToBehold(props){
  const current_page = window.location.pathname;
  let cp = current_page.split("/")[1];
  if(cp === ""){
    cp = "sicily";
  }
  const sightImgs = [combined[cp][6], combined[cp][7]];
  const leftProps = {"text": props.information.sightsText[0], "title": props.information.sightsTitle[0], "image": sightImgs[0]}
  const rightProps = {"text": props.information.sightsText[1], "title": props.information.sightsTitle[1], "image": sightImgs[1]}
  console.log(sightImgs);

  return(
    <div>
      <div className="row stb">
        <div className="col-12"><h3>Sights To Behold</h3></div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <Sight page={leftProps}/>
        </div>
        <div className="col-xl-6">
          <Sight page={rightProps} />
        </div>
      </div>
    </div>
  )
}

export default SightsToBehold;
