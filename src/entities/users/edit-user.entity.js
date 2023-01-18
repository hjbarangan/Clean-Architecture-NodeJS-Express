const makeUserUpdateEntity = ({}) => {
  return function updateUser({ firstname, lastname, password }) {
    if (!name) {
      throw new Error("Enter Firstname!");
    }

    if (!address) {
      throw new Error("Enter Lastname!");
    }
    if (!contact_number) {
      throw new Error("Enter Password!");
    }

    return Object.freeze({
      name,
      address,
      contact_number
    });
  };
};

module.exports = makeUserUpdateEntity;
