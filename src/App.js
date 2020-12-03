import './App.css';
import React, { Component } from 'react';
import BiggestPart from './components/biggestPart/big-part/biggestPart'

import { Switch, Route, Link } from "react-router-dom";
import Navbar from './components/biggestPart/navbar/Navbar'
import Home from './components/biggestPart/home/Home';



class App extends Component {

  render() {

    return (
      <div>
        <header>
          <h1>THIS IS HEADER</h1>
        </header>
        {/* // <Navbar /> */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <button><Link to="/big-part">big-part</Link></button>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/big-part">
            <BiggestPart />
          </Route>
        </Switch>

        <footer>
          <h1>THIS IS FOOTER</h1>
        </footer>
      </div>
    )
  }
}

export default App;
