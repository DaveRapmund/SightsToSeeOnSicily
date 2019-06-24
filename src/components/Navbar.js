import React from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';

function Navbar(){
  return(
    <nav className="navbar navbar-dark navbar-expand-sm">
    <button className="navbar-toggler m-auto" type="button" data-toggle="collapse" data-target="#toggleMenu">
    <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="toggleMenu">
    <div className="navbar-nav text-center mt-2">
    <Link className="nav-item nav-link mr-0 mr-sm-2" to="/">Home</Link>
    <Link className="nav-item nav-link mr-0 mr-sm-2" to="/cefalu">Cefalù</Link>
    <Link className="nav-item nav-link mr-0 mr-sm-2" to="/taormina">Taormina</Link>
    <Link className="nav-item nav-link mr-0 mr-sm-2" to="/palermo">Palermò</Link>
    </div>
    </div>
    </nav>
  )
}

export default Navbar;
