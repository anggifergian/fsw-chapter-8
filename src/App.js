import React, { Component } from "react";
import Movies from "./components/movies";
import Counters from "./components/counters";

class App extends Component {
  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <Movies />
          </div>
          <div className="col-md-6">
            <Counters />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
