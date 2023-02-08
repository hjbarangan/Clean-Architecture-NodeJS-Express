const userEntity = require("./user.entity");
const userLoginEntity = require("./user-login.entity");
const changePasswordEntity = require("./change-password.entity");
const userUpdateEntity = require("./edit-user.entity");

const services = Object.freeze({
  userEntity,
  userLoginEntity,
  changePasswordEntity,
  userUpdateEntity
});

module.exports = services;

module.exports = {
  userEntity,
  userLoginEntity,
  changePasswordEntity,
  userUpdateEntity
};
