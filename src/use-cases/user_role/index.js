const userRoleDB = require("../../data-access/user_role/index");
const userRoleEntity = require("../../entities/user_role/index");

const addUserRole = require("./add-userRole.usecase");
const editUserRole = require("./edit-userRole.usecase");
const viewUserRole = require("./view-userRole.usecase");
const viewAllUserRole = require("./view-all-userRole.usecase");
const softDelUserRole = require("./delete-userRole.usecase");

const addUserRoleUseCase = addUserRole({
  userRoleDB,
  userRoleEntity
});
const editUserRoleUseCase = editUserRole({
  userRoleDB,
  userRoleEntity
});
const viewUserRoleUseCase = viewUserRole({ userRoleDB });
const viewAllUserRoleUseCase = viewAllUserRole({ userRoleDB });
const softDeleteUserRoleUseCase = softDelUserRole({ userRoleDB });

const userRoleService = Object.freeze({
  addUserRoleUseCase,
  editUserRoleUseCase,
  viewUserRoleUseCase,
  viewAllUserRoleUseCase,
  softDeleteUserRoleUseCase
});

module.exports = userRoleService;

module.exports = {
  addUserRoleUseCase,
  editUserRoleUseCase,
  viewUserRoleUseCase,
  viewAllUserRoleUseCase,
  softDeleteUserRoleUseCase
};
