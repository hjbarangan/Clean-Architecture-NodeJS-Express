const comparePass = ({ bcrypt }) => {
  return function compare(data) {
    const { password, encryptPass } = data;
    return bcrypt.compare(password, encryptPass);
  };
};

module.exports = comparePass;
