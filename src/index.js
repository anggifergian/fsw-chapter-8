import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import { getMovies } from "./services/fakeMovieService";

import Pengajar from "./components/counter";

class App extends Component {
  state = {
    movies: getMovies(),
  };

  listingMovies = () => {
    const { movies } = this.state;
    return movies.map((movie) => {
      return (
        <tr key={movie._id}>
          <td>{movie.title}</td>
          <td>{movie.genre.name}</td>
          <td>{movie.numberInStock}</td>
          <td>{movie.dailyRentalRate}</td>
          <td>
            <button className="btn btn-outline-warning">Delete</button>
          </td>
        </tr>
      );
    });
  };

  stateTheNumberOfMovies = () => {
    const { movies } = this.state;
    return (
      <p>
        Showing {movies.length === 0 ? "0" : movies.length} movies in the
        database.
      </p>
    );
  };

  render() {
    return (
      <div className="container mt-4">
        <div className="row">
          <div className="col-md-6">
            <Pengajar />
            <div>{this.stateTheNumberOfMovies()}</div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{this.listingMovies()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
