import React, { Component } from "react";

class Counter extends Component {
  state = {
    counters: this.props.counter.value,
  };

  handlingCounter = () => {
    const { counters } = this.state;
    this.setState({
      counters: counters + 1,
    });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeColor()}>{this.formatCount()}</span>
        <button onClick={this.handlingCounter} className="btn btn-secondary">
          Increment
        </button>
        <button onClick={this.props.onDelete} className="btn btn-danger m-2">
          Delete
        </button>
      </div>
    );
  }

  getBadgeColor = () => {
    let classes = "mr-2 badge badge-";
    classes += this.state.counters === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { counters } = this.state;
    return counters === 0 ? "Zero" : counters;
  };
}

export default Counter;
