const makeUserEntity = ({}) => {
  return function createUser(user) {
    const { username, password, name, address } = user;

    if (!username) {
      throw new Error("User should have an username!");
    }

    if (!password) {
      throw new Error("User must have password!");
    }

    if (password.length < 8) {
      throw new Error("Password length must be atleast 8 characters!");
    }

    if (!name) {
      throw new Error("User must have a firstname!");
    }

    if (!address) {
      throw new Error("User must have a lastname!");
    }

    return Object.freeze({
      address,
      password,
      name,
      username
    });
  };
};

module.exports = makeUserEntity;
