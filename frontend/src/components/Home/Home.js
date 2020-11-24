import React, { Component } from "react";
import cookie from "react-cookies";
import { Redirect } from "react-router";

class Home extends Component {
  render() {
    // let redirectVar = null;
    // if (!cookie.load("cookie")) {
    //   redirectVar = <Redirect to="/Login" />;
    // }
    return (
      <div className="container">
        {/* {redirectVar} */}
        <div>
          <h1>Smithfield Farms</h1>
          <p>Welcome to the Farm Management Webpage</p>
        </div>
      </div>
    );
  }
}
//export Home Component
export default Home;
