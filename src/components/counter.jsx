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

  render() {
    return <ul>{this.listingPengajars()}</ul>;
  }
}

export default Pengajar;
