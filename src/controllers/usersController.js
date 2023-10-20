const User = require("../models/usersModel"); // Mengimpor model

const getAllUsers = (req, res) => {
  User.getAllUsers()
    .then((result) => res.status(200).json(result.rows))
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
};

const getUserById = (req, res) => {
  const userId = req.params.id;
  User.getUserById(userId)
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
};

const createUser = (req, res) => {
  const { email, gender, password, role } = req.body;
  User.createUser(email, gender, password, role)
    .then((result) => res.status(201).json(result.rows[0]))
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
};

const updateUser = (req, res) => {
  const userId = req.params.id;
  const { email, gender, password, role } = req.body;
  User.updateUser(userId, email, gender, password, role)
    .then((result) => {
      if (result.rows.length === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(200).json(result.rows[0]);
      }
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
};

const deleteUser = (req, res) => {
  const userId = req.params.id;
  User.deleteUser(userId)
    .then((result) => {
      if (result.rowCount === 0) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.status(204).send();
      }
    })
    .catch((error) => res.status(500).json({ error: "Internal server error" }));
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
