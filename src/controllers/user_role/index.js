const {
  addUserRoleUseCase,
  editUserRoleUseCase,
  viewUserRoleUseCase,
  viewAllUserRoleUseCase,
  softDeleteUserRoleUseCase
} = require("../../use-cases/user_role/index");

const addUserRoleController = require("./add-user-role.controller");
const editUserRoleController = require("./edit-user-role.controller");
const fetchAllUserRolesController = require("./get-all-user-role.controller");
const fetchUserRoleDetailsController = require("./get-user-role-details.controller");
const deleteUserRoleController = require("./soft-delete-user-role.controller");

const postUserRoleController = addUserRoleController({
  addUserRoleUseCase
});
const putUserRoleController = editUserRoleController({
  editUserRoleUseCase
});
const getAllUserRoleController = fetchAllUserRolesController({
  viewAllUserRoleUseCase
});
const getUserRoleByIdController = fetchUserRoleDetailsController({
  viewUserRoleUseCase
});

const softDeleteUserRoleController = deleteUserRoleController({
  softDeleteUserRoleUseCase
});

const controller = Object.freeze({
  postUserRoleController,
  putUserRoleController,
  getAllUserRoleController,
  getUserRoleByIdController,
  softDeleteUserRoleController
});

module.exports = controller;

module.exports = {
  postUserRoleController,
  putUserRoleController,
  getUserRoleByIdController,
  getAllUserRoleController,
  softDeleteUserRoleController
};
