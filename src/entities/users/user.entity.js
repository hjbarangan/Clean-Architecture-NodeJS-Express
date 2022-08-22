const makeUserEntity = ({}) => {
  return async function make({ email, password, firstname, lastname } = {}) {
    if (!email) {
      throw new Error("Car must have email!");
    }

    if (!password) {
      throw new Error("Car must have password!");
    }

    if (!firstname) {
      throw new Error("Car must have firstname!");
    }

    if (!lastname) {
      throw new Error("Car must have lastname!");
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
