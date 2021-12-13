import React, { Component } from "react";
import { getMovies } from "../service/fakeMovieService";
import Like from "./Like";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);

    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };
  render() {
    return (
      <>
        <p className="alert alert-primary mt-3 p-2" role="alert">
          {this.state.movies.length === 0
            ? "There is no movies in database."
            : `Showing ${this.state.movies.length} movies in the database.`}
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <th>{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  {" "}
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />{" "}
                </td>
                <td onClick={() => this.handleDelete(movie)}>
                  <ion-icon name="trash-outline"></ion-icon>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
