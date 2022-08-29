const makeUserEntity = require("./user.entity");
const makeUserLoginEntity = require("./user-login.entity")

const userEntity = makeUserEntity({});
const userLoginEntity = makeUserLoginEntity({})

const services = Object.freeze({ userEntity, userLoginEntity });

module.exports = services;

module.exports = {userEntity, userLoginEntity};
