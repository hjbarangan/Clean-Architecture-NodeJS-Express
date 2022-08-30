const jwt = require("jsonwebtoken");
const SECRET_KEY = require("../config/auth.config");
const tokenChecker = require("./auth.middleware");
const authMiddleware = tokenChecker({ jwt, SECRET_KEY });

module.exports = authMiddleware;
