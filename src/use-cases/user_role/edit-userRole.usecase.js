const editUserRole = ({ userRoleDB, userRoleEntity }) => {
  return async function putuserRole({ id, ...userRoleInfo }) {
    const result = userRoleEntity(userRoleInfo);

    return userRoleDB.editUserRole({
      id: id,
      role: result.role,

    });
  };
};
module.exports = editUserRole;
