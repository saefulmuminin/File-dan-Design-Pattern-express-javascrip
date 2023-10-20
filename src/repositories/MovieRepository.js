// repositories/MovieRepositoryImpl.js
const pool = require("../config/database.js");

class MovieRepositoryImpl {
  getAllMovies() {
    return pool.query("SELECT * FROM movies");
  }

  getMovieById(movieId) {
    return pool.query("SELECT * FROM movies WHERE id = $1", [movieId]);
  }

  createMovie(title, genres, year) {
    return pool.query(
      "INSERT INTO movies (title, genres, year) VALUES ($1, $2, $3) RETURNING *",
      [title, genres, year]
    );
  }

  deleteMovie(movieId) {
    return pool.query("DELETE FROM movies WHERE id = $1", [movieId]);
  }

  uploadMoviePhoto(movieId, photo) {
    return pool.query(
      "UPDATE movies SET photo = $1 WHERE id = $2 RETURNING *",
      [photo, movieId]
    );
  }
}

module.exports = MovieRepositoryImpl;
