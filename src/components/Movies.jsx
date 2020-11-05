import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import ListGroup from "./common/list-group";
import Like from "./common/like";
import Paging from "./common/pagination";
import { pagination } from "./utils/pagination";
import { Link } from "react-router-dom";
import Search from "./common/search";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
    searchQuery: "",
    selectedGenre: { _id: 0, name: "All Genres" },
  };

  componentDidMount() {
    const genres = [{ _id: 0, name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

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

  handleSelectGenre = (genre) => {
    this.setState({ selectedGenre: genre, searchQuery: "", currentPage: 1 });
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      selectedGenre,
      searchQuery,
    } = this.state;

    if (count === 0) return <p>There are no movie in the database.</p>;

    let filtered = allMovies;
    if (searchQuery)
      filtered = allMovies.filter((m) =>
        m.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    else if (selectedGenre && selectedGenre._id !== 0)
      filtered = allMovies.filter((movie) => movie.genre._id === selectedGenre._id);

    const movies = pagination(filtered, currentPage, pageSize);

    return (
      <div className="row">
        <div className="col-sm-12 col-md-2 mb-3">
          <ListGroup
            genres={this.state.genres}
            onSelectGenre={this.handleSelectGenre}
            selectedGenre={this.state.selectedGenre}
          />
        </div>
        <div className="col">
          <Link to={`/movies/new`}>
            <button className="btn btn-primary">New Movies</button>
          </Link>
          <div className="mt-2">
            <p>Showing {filtered.length} movies in the database</p>
          </div>
          <Search onSearch={this.handleSearch} />
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
                      <Link to={`/movies/${movie._id}`}>
                        <button className="btn btn-outline-warning btn-sm ml-2">
                          Edit
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <Paging
            totalNumbers={filtered.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onChangePage={this.handleChangePage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
