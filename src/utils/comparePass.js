const comparePass = ({ bcrypt }) => {
  async function compare(password, encryptPass) {
    return bcrypt.compare(password, encryptPass);
  }
  return compare;
};

module.exports = comparePass;
