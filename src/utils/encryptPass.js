const encryptPass = ({bcrypt}) => {
  async function encrypt(password) {
    const salt = await bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }
  return encrypt;
};

module.exports = encryptPass;
