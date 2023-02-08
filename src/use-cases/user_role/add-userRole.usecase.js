const addUserRole = ({ userRoleDB, userRoleEntity }) => {
  return async function postUserRole(role) {
    const result = userRoleEntity(role);

    return userRoleDB.addUserRole({
      role: result.role
    });
  };
};
module.exports = addUserRole;
