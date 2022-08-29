const comparePass = ({ bcrypt }) => {
  return function encode(data) {
    const { password, encryptPass } = data;
    return bcrypt.compare(password, encryptPass);
  };
};

module.exports = comparePass;
