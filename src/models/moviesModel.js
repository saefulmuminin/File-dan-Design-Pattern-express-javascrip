const MovieRepositoryImpl = require("../repositories/MovieRepository");

const movieRepository = new MovieRepositoryImpl();

class Movie {
  static getAllMovies() {
    return movieRepository.getAllMovies();
  }

  static getMovieById(movieId) {
    return movieRepository.getMovieById(movieId);
  }

  static createMovie(title, genres, year) {
    return movieRepository.createMovie(title, genres, year);
  }

  static deleteMovie(movieId) {
    return movieRepository.deleteMovie(movieId);
  }

  static uploadMoviePhoto(movieId, photo) {
    return movieRepository.uploadMoviePhoto(movieId, photo);
  }
}

module.exports = Movie;
