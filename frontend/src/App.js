import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import "./App.css";
import Main from "./components/Main";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

//App Component
class App extends Component {
  render() {
    return (
        /*Use Browser Router to route to different pages*/
        <BrowserRouter>
          <div>
            {/* App Component Has a Child Component called Main*/}
            <Main />
            <Switch>
             <Route path="/Home" component={Home} exact/>
             <Route path="/Login" component={Login}/>
             <Route path="/Signup" component={Signup}/>
           </Switch>
          </div>
        </BrowserRouter>
    );
}
}
//Export the App component so that it can be used in index.js
export default App;
