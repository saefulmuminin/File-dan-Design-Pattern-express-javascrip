// repositories/UserRepositoryImpl.js
const pool = require("../config/database.js");

class UserRepositoryImpl {
  getAllUsers() {
    return pool.query("SELECT * FROM users");
  }

  getUserById(userId) {
    return pool.query("SELECT * FROM users WHERE id = $1", [userId]);
  }

  createUser(email, gender, password, role) {
    return pool.query(
      "INSERT INTO users (email, gender, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
      [email, gender, password, role]
    );
  }

  updateUser(userId, email, gender, password, role) {
    return pool.query(
      "UPDATE users SET email = $1, gender = $2, password = $3, role = $4 WHERE id = $5 RETURNING *",
      [email, gender, password, role, userId]
    );
  }

  deleteUser(userId) {
    return pool.query("DELETE FROM users WHERE id = $1", [userId]);
  }
}

module.exports = UserRepositoryImpl;
