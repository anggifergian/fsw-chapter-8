import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Paging from "./common/pagination";
import { pagination } from "./utils/pagination";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 5,
    currentPage: 1,
  };

  numberOfMovies = () => {
    const { movies } = this.state;
    return (
      <p>Showing {movies.length === 0 ? "0" : movies.length} movies in the database</p>
    );
  };

  deleteMovies = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleChangePage = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (count === 0) return <p>There are no movie in the database.</p>;

    const movies = pagination(allMovies, currentPage, pageSize);

    return (
      <React.Fragment>
        <div className="mt-2">{this.numberOfMovies()}</div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Stock</th>
              <th>Rate</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => {
              return (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  <td>
                    <Like liked={movie.liked} onLiked={() => this.handleLike(movie)} />
                  </td>
                  <td>
                    <button
                      onClick={() => this.deleteMovies(movie)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Paging
          totalNumbers={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onChangePage={this.handleChangePage}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
