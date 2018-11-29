import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import StateComponent from './components/stateComponent';
import Training from './components/Training';
import ParentComponent from './components/ParentComponent';
import containerComponents from './components/containerComponents';
import WrapperComponent from './components/containerComponents/WrapperComponent';
import SharedComponent from './components/containerComponents/SharedComponent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={WrapperComponent} exact />
            <Route path="/container" component={containerComponents} /> 
            <Route path="/Parent" component={ParentComponent} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/training" component={Training} />
            <Route path="/new" component={SharedComponent}/> 
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App; 