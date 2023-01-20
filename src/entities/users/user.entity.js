const makeUserEntity = ({}) => {
  return function createUser(user) {
    const { username, password, name, address, contact_number, user_role_id } =
      user;

    if (!username) {
      throw new Error("User should have an username!");
    }

    if (!password) {
      throw new Error("User must have password!");
    }

    if (!name) {
      throw new Error("User must have a firstname!");
    }

    if (!address) {
      throw new Error("User must have a lastname!");
    }

    if (!contact_number) {
      throw new Error("User must have a role!");
    }

    if (!user_role_id) {
      throw new Error("User must have a role!");
    }

    return Object.freeze({
      address,
      password,
      name,
      username,
      contact_number,
      user_role_id
    });
  };
};

module.exports = makeUserEntity;
