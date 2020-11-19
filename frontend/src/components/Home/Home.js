import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";

class Home extends Component {
  render() {
    let redirectVar = null;
    if (!cookie.load("cookie")) {
      redirectVar = <Redirect to="/login" />;
    }
    return (
      <div className="container">
        {redirectVar}
        <div>
          <h1>Awesome Farms</h1>
        </div>
      </div>
    );
  }
}
//export Home Component
export default Home;