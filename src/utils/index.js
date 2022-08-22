const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const authConfig = require('../config/auth.config')
const jwtGenerator = require('./auth.util');

