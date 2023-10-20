const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/moviesController");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Definisikan rute CRUD untuk movies
router.get("/", moviesController.getAllMovies);
router.get("/:id", moviesController.getMovieById);
router.post("/", moviesController.createMovie);
router.put("/:id", moviesController.updateMovie);
router.delete("/:id", moviesController.deleteMovie);

// Konfigurasi penyimpanan file dengan Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../asset/upload")); // Simpan file di direktori "upload"
  },
  filename: (req, file, cb) => {
    const originalname = file.originalname;
    const extension = path.extname(originalname);
    const timestamp = Date.now();
    const filename = `${originalname.split(".")[0]}-${timestamp}${extension}`;
    cb(null, filename); // Nama file akan berisi timestamp
  },
});

const upload = multer({ storage: storage });

// Rute untuk mengunggah foto ke data movies
router.put(
  "/:id/upload",
  upload.single("photo"),
  moviesController.uploadMoviePhoto
);

// Rute untuk menyajikan gambar
router.get("/:id/view/:filename", (req, res) => {
  const movieId = req.params.id;
  const filename = req.params.filename;
  const filePath = path.join(__dirname, `../asset/upload/${filename}`); // Sesuaikan dengan direktori penyimpanan file

  // Lakukan pengecekan apakah file ada
  if (fs.existsSync(filePath)) {
    res.sendFile(filePath);
  } else {
    res.status(404).json({ error: "File not found" });
  }
});

module.exports = router;
