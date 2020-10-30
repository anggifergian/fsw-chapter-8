import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((counter) => counter.id !== counterId);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    console.log(this.state.counters.filter((c) => c.value > 0));
    return (
      <>
        <Navbar totalNumbers={this.state.counters.filter((c) => c.value > 0).length} />
        <main>
          <div className="container mt-4">
            <Counters
              counters={this.state.counters}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              onReset={this.handleReset}
            />
          </div>
        </main>
      </>
    );
  }
}

export default App;
