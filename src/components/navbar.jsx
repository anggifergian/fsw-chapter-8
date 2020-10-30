import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand mb-0 h1">
            Totals <span className="badge badge-success">{this.props.totalNumbers}</span>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
