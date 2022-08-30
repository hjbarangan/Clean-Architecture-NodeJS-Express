const encryptPass = ({bcrypt}) => {
  async function encrypt(password) {
    const saltRounds = 10;
    const salt = await bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
  }
  return encrypt;
};

module.exports = encryptPass;
