import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from "./page/home/Home";
import About from "./page/about/About";
import NotFound from "./page/not-found/NotFound";
import Navbar from "./component/navbar/Navbar";
import {navbarData} from "./data/componentsData.js"
import Demo from "./page/demo/Demo";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar data={navbarData}/>
          <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/demo'} component={Demo}/>
            <Route exact path={'/about'} component={About}/>
            <Route exact path={'*'} component={NotFound}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
