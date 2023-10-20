const Movie = require("../models/moviesModel");

const getAllMovies = (req, res) => {
  Movie.getAllMovies()
    .then((result) => res.status(200).json(result.rows))
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
};

const getMovieById = (req, res) => {
  const movieId = req.params.id;
  Movie.getMovieById(movieId)
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Movie not found" });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
};

const createMovie = (req, res) => {
  const { title, genres, year } = req.body;
  const photo = req.file ? req.file.filename : null; // Mengambil nama file dari req.file

  Movie.createMovie(title, genres, year, photo)
    .then((result) => res.status(201).json(result.rows[0]))
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
};

const updateMovie = (req, res) => {
  const movieId = req.params.id;
  const { title, genres, year } = req.body;
  const photo = req.file ? req.file.filename : null; // Mengambil nama file dari req.file

  Movie.updateMovie(movieId, title, genres, year)
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Movie not found" });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
};

const deleteMovie = (req, res) => {
  const movieId = req.params.id;
  Movie.deleteMovie(movieId)
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).json({ error: "Movie not found" });
      } else {
        res.status(204).send();
      }
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
};

// ...

const uploadMoviePhoto = (req, res) => {
  const movieId = req.params.id; // Mendapatkan ID film dari URL
  const photo = req.file ? req.file.filename : null; // Mengambil nama file yang diunggah
  Movie.uploadMoviePhoto(movieId, photo)
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).json({ error: "Movie not found" });
      } else {
        res.status(201).json(result.rows[0]);
      }
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
};

// ...

module.exports = {
  getAllMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie,
  uploadMoviePhoto,
};
