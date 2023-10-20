const UserRepositoryImpl = require("../repositories/UserRepository");

const userRepository = new UserRepositoryImpl();

class User {
  static getAllUsers() {
    return userRepository.getAllUsers();
  }

  static getUserById(userId) {
    return userRepository.getUserById(userId);
  }

  static createUser(email, gender, password, role) {
    return userRepository.createUser(email, gender, password, role);
  }

  static updateUser(userId, email, gender, password, role) {
    return userRepository.updateUser(userId, email, gender, password, role);
  }

  static deleteUser(userId) {
    return userRepository.deleteUser(userId);
  }
}

module.exports = User;
