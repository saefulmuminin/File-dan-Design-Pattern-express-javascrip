// repositories/MovieRepository.js
class MovieRepository {
  getAllMovies() {}
  getMovieById(movieId) {}
  createMovie(title, genres, year) {}
  deleteMovie(movieId) {}
  uploadMoviePhoto(movieId, photo) {}
}

module.exports = MovieRepository;

// repositories/UserRepository.js
class UserRepository {
  getAllUsers() {}
  getUserById(userId) {}
  createUser(email, gender, password, role) {}
  updateUser(userId, email, gender, password, role) {}
  deleteUser(userId) {}
}

module.exports = UserRepository;
