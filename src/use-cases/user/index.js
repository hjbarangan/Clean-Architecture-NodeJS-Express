const userDB = require("../../data-access/users/index");
const {
  userEntity,
  userLoginEntity,
  userUpdateEntity,
  changePasswordEntity
} = require("../../entities/users/index");
const { generateToken, comparePassword } = require("../../utils/index");

const addUser = require("./add-user.usecase");
const editUser = require("./edit-user.usecase");
const viewUser = require("./view-user.usecase");
const viewAllUsers = require("./view-all-users.usecase");
const changePassword = require("./change-password.usecase");
const loginUser = require("./login-user.usecase");
const softDelUser = require("./soft-delete-user.usecase");

const addUserUseCase = addUser({ userDB, userEntity });
const editUserUseCase = editUser({ userDB, userUpdateEntity });
const viewAllUsersUseCase = viewAllUsers({ userDB });
const viewUserUseCase = viewUser({ userDB });
const changePasswordUseCase = changePassword({ userDB, changePasswordEntity });
const loginUserUseCase = loginUser({
  userDB,
  userLoginEntity,
  generateToken,
  comparePassword
});
const softDeleteUserUseCase = softDelUser({ userDB });

module.exports = {
  addUserUseCase,
  editUserUseCase,
  viewAllUsersUseCase,
  viewUserUseCase,
  changePasswordUseCase,
  loginUserUseCase,
  softDeleteUserUseCase
};
