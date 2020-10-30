import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.onReset} className="btn btn-primary mb-2">
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={() => this.props.onDelete(counter.id)}
            onIncrement={() => this.props.onIncrement(counter)}
          />
        ))}
      </>
    );
  }
}

export default Counters;
