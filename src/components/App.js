import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../scss/style.scss';

import Navbar from './Navbar';
import Home from './pages/Home';
import Cefalu from './pages/Cefalu';
import Taormina from './pages/Taormina';
import Palermo from './pages/Palermo';

class App extends Component{
  render(){
    return(
      <Router>
        <div className="app">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cefalu" component={Cefalu} />
            <Route path="/taormina" component={Taormina} />
            <Route path="/palermo" component={Palermo} />
          </Switch>
          </div>
      </Router>
    )
  }
}

export default App;
