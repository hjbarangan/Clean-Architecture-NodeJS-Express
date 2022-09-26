const makeChangePasswordEntity = ({}) => {
  return function changePassword({ password }) {
    if (!password) {
      throw new Error("Enter Password!");
    }

    return Object.freeze({
      password
    });
  };
};

module.exports = makeChangePasswordEntity;
