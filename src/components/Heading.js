import React from 'react';

function Heading(props){
  const page = window.location.pathname;
  let clean_page = page.split("/")[1];
  if(clean_page === ""){
    clean_page = "sicily";
  }

  console.log(props)

  return(
    <div>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-md-8 col-12 d-sm-block">
          <h1 className="heading-title">
            <svg width="100px" height="100%">
              <line x1="10" y1="50%" x2="60" y2="50%" stroke="black" strokeWidth="3px" strokeLinecap="round"/>
            </svg>
            {clean_page === "cefalu" ? "cefalù" : clean_page}
            <svg width="100px" height="100%">
              <line x1="40" y1="50%" x2="90" y2="50%" stroke="black" strokeWidth="3px" strokeLinecap="round" />
            </svg>
          </h1>
        </div>
        <div className="d-none d-md-inline-block col-md-2 map"></div>
      </div>

      <div className="row">
        <div className="col-12 d-md-none map-vert"></div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3>{props.headingText}</h3>
        </div>
      </div>
    </div>
  )
}

export default Heading;
