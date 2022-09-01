const makeUserEntity = ({}) => {
  return function createUser(user) {
    const { email, password, firstname, lastname } = user;

    if (!email) {
      throw new Error("User must have email!");
    }

    if (!password) {
      throw new Error("User must have password!");
    }

    if (!firstname) {
      throw new Error("User must have firstname!");
    }

    if (!lastname) {
      throw new Error("User must have lastname!");
    }

    return Object.freeze({
      email,
      password,
      firstname,
      lastname,
    });
  };
};

module.exports = makeUserEntity;
