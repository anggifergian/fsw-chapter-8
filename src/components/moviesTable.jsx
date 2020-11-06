import React, { Component } from "react";
import Like from "./common/like";
import { Link } from "react-router-dom";

class MoviesTable extends Component {
  raiseSort = (path) => {
    const sortPath = { ...this.props.sortPath };
    if (sortPath.sort === path)
      sortPath.order = sortPath.order === "asc" ? "desc" : "asc";
    else {
      sortPath.order = "asc";
      sortPath.sort = path;
    }
    this.props.onSort(sortPath);
  };

  render() {
    const { movies, onLike, onDelete } = this.props;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
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
                  <Like liked={movie.liked} onLiked={() => onLike(movie)} />
                </td>
                <td>
                  <button
                    onClick={() => onDelete(movie)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Delete
                  </button>
                  <Link to={`/movies/${movie._id}`}>
                    <button className="btn btn-outline-warning btn-sm ml-2">Edit</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
