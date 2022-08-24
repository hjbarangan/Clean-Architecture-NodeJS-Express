const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../config/auth.config");

// const authConfig = require('../config/auth.config')
const jwtGenerator = require("./auth.util");
const comparePass = require("./comparePass");
const encryptPass = require("./encryptPass");

const jwtGenerate = jwtGenerator({ jwt, SECRET_KEY });
const comparePassword = comparePass({ bcrypt });
const encryptPassword = encryptPass({ bcrypt });

module.exports = { jwtGenerate, comparePassword, encryptPassword };
