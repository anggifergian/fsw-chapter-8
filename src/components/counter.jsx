import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <span className={this.getBadgeColor()}>{this.formatCount()}</span>
        <button onClick={this.props.onIncrement} className="btn btn-secondary">
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
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  };
}

export default Counter;
