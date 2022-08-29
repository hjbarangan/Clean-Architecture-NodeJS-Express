// const jwt = require("jsonwebtoken");
// const SECRET_KEY = require("../config/auth.config");
const bcrypt = require("bcrypt");

// const jwtGenerator = require("./auth.util");
const comparePass = require("./comparePass");
const encryptPass = require("./encryptPass");

const comparePassword = comparePass({ bcrypt });
const encryptPassword = encryptPass({ bcrypt });
// const jwtGenerate = jwtGenerator({ jwt, SECRET_KEY });

const authService = Object.freeze({
  encryptPassword,
  comparePassword
});

module.exports = authService;

module.exports = { encryptPassword, comparePassword };
