const makeUserEntity = require("./user.entity");
const makeUserLoginEntity = require("./user-login.entity");
const makeChangePasswordEntity = require("./change-password.entity");
const makeUserUpdateEntity = require("./edit-user.entity");

const userEntity = makeUserEntity({});
const userLoginEntity = makeUserLoginEntity({});
const userUpdateEntity = makeUserUpdateEntity({});
const changePasswordEntity = makeChangePasswordEntity({});

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
