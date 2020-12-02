import React, { Component } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import NavBar from "./components/navbar";
import Movies from "./components/Movies";
import MoviesForm from "./components/moviesForm";
import Login from "./components/login";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
    ],
  };

  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      this.setState({ user });
      this.panggilData();
    } catch (ex) {}
  }

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
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
    return (
      <>
        <NavBar user={this.state.user} />
        <main>
          {/* <Total totalNumbers={this.state.counters.filter((c) => c.value > 0).length} /> */}
          <div className='container' style={{ marginTop: 13 }}>
            <Switch>
              <Route path='/movies' exact component={Movies} />
              <Route path='/movies/:id' component={MoviesForm} />
              <Route path='/login' component={Login} />
              <Redirect from='/' exact to='/movies' />
            </Switch>
          </div>
        </main>
      </>
    );
  }
}

export default App;
