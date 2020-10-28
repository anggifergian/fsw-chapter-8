import React, { Component } from "react";
import Movies from "./components/Movies";
import Pengajar from "./components/Counter";

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <Movies />
          </div>
          <div className="col-md-6">
            <Pengajar />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
