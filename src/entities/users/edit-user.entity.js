const makeUserUpdateEntity = ({}) => {
  return function updateUser({ firstname, lastname }) {

    if (!firstname) {
      throw new Error("Enter Firstname!");
    }

    if (!lastname) {
      throw new Error("Enter Lastname!");
    }

    return Object.freeze({
      firstname,
      lastname
    });
  };
};

module.exports = makeUserUpdateEntity;
