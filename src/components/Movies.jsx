import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  deleteMovies = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
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
            <button
              onClick={() => this.deleteMovies(movie)}
              className="btn btn-outline-danger"
            >
              Delete
            </button>
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
    const { length } = this.state.movies;

    if (length === 0) return <p>There are no movie in the database.</p>;

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
    );
  }
}

export default Movies;
