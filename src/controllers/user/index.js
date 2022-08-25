const {
  addUserUseCase,
  editUserUseCase,
  viewAllUsersUseCase,
  viewUserUseCase,
} = require("../../use-cases/user/index");

const addUserController = require("./add-user.controller");
const editUserController = require("./edit-user.controller");
const fetchAllUsersController = require("./get-all-users.controller");

const postUserController = addUserController({ addUserUseCase });
const getAllUsersController = fetchAllUsersController({ viewAllUsersUseCase });

const controller = Object.freeze({ postUserController, getAllUsersController });

module.exports = controller;

module.exports = { postUserController, getAllUsersController };
