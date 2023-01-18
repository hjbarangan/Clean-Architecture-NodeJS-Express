const makeUserRoleEntity = ({}) => {
  return function createUserRole({role}) {
    if (!role) {
      throw new Error("Role is required.");
    }

    return Object.freeze({
      role
    });
  };
};

module.exports = makeUserRoleEntity;
