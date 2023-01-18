const {
  addUserRoleUseCase,
  editUserRoleUseCase,
  viewUserRoleUseCase,
  viewAllUserRoleUseCase,
  softDeleteUserRoleUseCase
} = require("../../use-cases/user_role/index");

const addUserRoleController = require("./add-userRole.controller");
const editUserRoleController = require("./edit-userRole.controller");
const fetchAllUserRolesController = require("./get-all-userRole.controller");
const fetchUserRoleDetailsController = require("./get-userRole-details.controller");
const deleteUserRoleController = require("./soft-delete-userRole.controller");

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
