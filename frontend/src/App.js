// SJSU CMPE 226 Fall2020TEAM3

import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.css';
import Main from './components/Main';

//App Component
class App extends Component {
  render() {
    return (
      /*Use Browser Router to route to different pages*/
      <BrowserRouter>
        <div>
          {/* App Component Has a Child Component called Main*/}
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}
//Export the App component so that it can be used in index.js
export default App;
