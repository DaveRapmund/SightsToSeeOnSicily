import React from 'react';

function Heading(){
  const page = window.location.pathname;
  const clean_page = page.split("/")[1];

  return(
    <div className="heading row">
      <div className="col-12">
        <h1 className="heading-title">{clean_page === "cefalu" ? "cefalù" : clean_page}</h1>
        <h3>Found at the highest peak of the beautiful island of Sicily, the small fisherman's town of Cefalù is a sight to behold.</h3>
      </div>
    </div>
  )
}

export default Heading;
