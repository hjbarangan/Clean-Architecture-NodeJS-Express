const bcrypt = require("bcrypt");

// const encryptPass = (password) => {
//   const salt = bcrypt.genSalt(10);
//   return bcrypt.hash(password, salt);
// };

function encryptPass(password) {
  return function encode(data) {
    const salt = bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  }
  
}

module.exports = encryptPass;
