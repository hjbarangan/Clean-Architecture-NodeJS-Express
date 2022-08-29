const {
  addUserUseCase,
  editUserUseCase,
  viewAllUsersUseCase,
  viewUserUseCase,
  loginUserUseCase
} = require("../../use-cases/user/index");

const addUserController = require("./add-user.controller");
const editUserController = require("./edit-user.controller");
const fetchAllUsersController = require("./get-all-users.controller");
const loginUserAuthController = require("./login-user.controller")


const postUserController = addUserController({ addUserUseCase });
const getAllUsersController = fetchAllUsersController({ viewAllUsersUseCase });
const loginUserController = loginUserAuthController({loginUserUseCase});


const controller = Object.freeze({ postUserController, getAllUsersController, loginUserController });

module.exports = controller;

module.exports = { postUserController, getAllUsersController, loginUserController };
