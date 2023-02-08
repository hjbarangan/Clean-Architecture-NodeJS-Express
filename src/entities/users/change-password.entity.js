const changePasswordEntity = ({ password }) => {
  if (!password) {
    throw new Error("Enter Password!");
  }

  return Object.freeze({
    password
  });
};

module.exports = changePasswordEntity;
