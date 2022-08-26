const encryptPass = ({ bcrypt }) => {
  const encrypt = async function encode(data) {
    const { password } = data;
    const salt = bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
  };
  return encrypt;
};

module.exports = encryptPass;