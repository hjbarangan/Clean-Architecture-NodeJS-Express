const {
  addUserUseCase,
  editUserUseCase,
  viewAllUsersUseCase,
  viewUserUseCase,
  softDeleteUserUseCase,
  loginUserUseCase,
} = require("../../use-cases/user/index");

const addUserController = require("./add-user.controller");
const editUserController = require("./edit-user.controller");
const fetchAllUsersController = require("./get-all-users.controller");
const fetchUserDetailsController = require("./get-user-details.controller");
const deleteUserController = require("./soft-delete-user.controller");
const loginUserAuthController = require("./login-user.controller");

const postUserController = addUserController({ addUserUseCase });
const putUserController = editUserController({ editUserUseCase });
const getAllUsersController = fetchAllUsersController({ viewAllUsersUseCase });
const loginUserController = loginUserAuthController({ loginUserUseCase });
const getUserByIdController = fetchUserDetailsController({ viewUserUseCase });
const softDeleteUserController = deleteUserController({
  softDeleteUserUseCase,
});

const controller = Object.freeze({
  postUserController,
  putUserController,
  getAllUsersController,
  loginUserController,
  softDeleteUserController,
  getUserByIdController,
});

module.exports = controller;

module.exports = {
  postUserController,
  putUserController,
  getAllUsersController,
  loginUserController,
  getUserByIdController,
  softDeleteUserController,
};
