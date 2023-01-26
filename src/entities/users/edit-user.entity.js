const makeUserUpdateEntity = ({}) => {
  return function updateUser({
    username,
    password,
    name,
    address,
    contact_number,
    user_role_id
  }) {


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
      username,
      password,
      name,
      address,
      contact_number,
      user_role_id
    });
  };
};

module.exports = makeUserUpdateEntity;
