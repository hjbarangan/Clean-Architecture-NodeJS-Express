
const bcrypt = require("bcrypt");

const jwtGenerator = require("./auth.util");
const comparePass = require("./comparePass");
const encryptPass = require("./encryptPass");

const comparePassword = comparePass({ bcrypt });
const encryptPassword = encryptPass({ bcrypt });
const jwtGenerate = jwtGenerator();

const authService = Object.freeze({
  encryptPassword,
  comparePassword,
  jwtGenerate
});

module.exports = authService;

module.exports = { encryptPassword, comparePassword, jwtGenerate };
