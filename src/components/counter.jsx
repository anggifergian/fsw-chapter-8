import React, { Component } from "react";

class Pengajar extends Component {
  state = {
    counters: 0,
    pengajars: [
      { _id: 1, name: "Pengajar1" },
      { _id: 2, name: "Pengajar2" },
      { _id: 3, name: "Pengajar3" },
    ],
  };

  styles = {
    fontSize: 24,
    fontWeight: "bold",
  };

  listingPengajars = () => {
    const { pengajars } = this.state;
    return pengajars.map((pengajar) => {
      return <li key={pengajar._id}>{pengajar.name}</li>;
    });
  };

  handlingCounter = () => {
    const {counters} = this.state;
    this.setState({
      counters: counters + 1
    })
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeColor()}>{this.formatCount()}</span>
        <button onClick={this.handlingCounter} className="btn btn-secondary">Increment</button>
      </div>
    )
  }

  getBadgeColor = () => {
    let classes = "mr-2 badge badge-";
    classes += this.state.counters === 0 ? 'warning' : 'primary';
    return classes;
  }

  formatCount = () => {
    const {counters} = this.state;
    return counters === 0 ? "Zero" : counters;
  }
}

export default Pengajar;
