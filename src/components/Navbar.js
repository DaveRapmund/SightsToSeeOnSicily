import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

function Navbar(){
  return(
      <div className="navbar-row row">
        <nav className="navbar navbar-dark navbar-expand-sm col-12">
          <button className="navbar-toggler m-auto" type="button" data-toggle="collapse" data-target="#toggleMenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="toggleMenu">
            <div className="navbar-nav text-center mt-2">
                <CSSTransition in={true} appear={true} timeout={300} classNames="lt1">
                  <Link className="nav-item nav-link mr-0 mr-sm-5 text-white" to="/">Home</Link>
                </CSSTransition>
                <CSSTransition in={true} appear={true} timeout={400} classNames="lt2">
                  <Link className="nav-item nav-link mr-0 mr-sm-5 text-white" to="/cefalu">Cefalù</Link>
                </CSSTransition>
                <CSSTransition in={true} appear={true} timeout={500} classNames="lt3">
                  <Link className="nav-item nav-link mr-0 mr-sm-5 text-white" to="/taormina">Taormina</Link>
                </CSSTransition>
                <CSSTransition in={true} appear={true} timeout={600} classNames="lt4">
                  <Link className="nav-item nav-link mr-0 mr-sm-5 text-white" to="/palermo">Palermo</Link>
                </CSSTransition>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default Navbar;
