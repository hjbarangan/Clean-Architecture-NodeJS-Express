const makeUserUpdateEntity = ({}) => {
  return function updateUser({ firstname, lastname, password }) {

    if (!firstname) {
      throw new Error("Enter Firstname!");
    }

    if (!lastname) {
      throw new Error("Enter Lastname!");
    }
    if (!password) {
      throw new Error("Enter Password!");
    }

    return Object.freeze({
      firstname,
      lastname,
      password
    });
  };
};

module.exports = makeUserUpdateEntity;
