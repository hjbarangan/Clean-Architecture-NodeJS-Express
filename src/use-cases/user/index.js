const userDB = require("../../data-access/users/index");
const { userEntity, userLoginEntity } = require("../../entities/users/index");

const addUser = require("./add-user.usecase");
const editUser = require("./edit-user.usecase");
const viewUser = require("./view-user.usecase");
const viewAllUsers = require("./view-all-users.usecase");
const loginUser = require("./login-user.usecase");

const addUserUseCase = addUser({ userDB, userEntity });
const editUserUseCase = editUser({ userDB, userEntity });
const viewAllUsersUseCase = viewAllUsers({ userDB });
const viewUserUseCase = viewUser({ userDB });
const loginUserUseCase = loginUser({ userDB, userLoginEntity });

const userServices = Object.freeze({
  addUserUseCase,
  editUserUseCase,
  viewAllUsersUseCase,
  viewUserUseCase,
  loginUserUseCase,
});

module.exports = userServices;

module.exports = {
  addUserUseCase,
  editUserUseCase,
  viewAllUsersUseCase,
  viewUserUseCase,
  loginUserUseCase,
};
