const encryptPass = ({ bcrypt }) => {
  return function encode(data) {
      const { password } = data;
      const salt = bcrypt.genSalt(10);
      return bcrypt.hash(password, salt)
  };
};

module.exports = encryptPass;