const express = require("express");
const dotenv = require("dotenv");
const app = express();
const pool = require("./src/config/database.js");
const port = process.env.PORT || 3000;
const usersRoutes = require("./src/routes/usersRoutes.js");
const moviesRoutes = require("./src/routes/moviesRoutes.js");
const multer = require("multer");
dotenv.config();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/movies", moviesRoutes);

app.listen(port, () => {
  console.log(`Aplikasi berjalan di port ${port}`);
});
