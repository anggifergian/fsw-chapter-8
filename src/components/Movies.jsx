import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
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

  numberOfMovies = () => {
    const { movies } = this.state;
    return (
      <p>Showing {movies.length === 0 ? "0" : movies.length} movies in the database</p>
    );
  };

  render() {
    return (
      <React.Fragment>
        <div>{this.numberOfMovies()}</div>
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
      </React.Fragment>
    )
  }
}

export default Movies;