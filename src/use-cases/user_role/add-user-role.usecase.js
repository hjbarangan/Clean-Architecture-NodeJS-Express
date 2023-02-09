const addUserRole = ({ userRoleDB, userRoleEntity }) => {
  return async function postUserRole(role) {
    const result = userRoleEntity(role);

    const data = await userRoleDB.addUserRole({
      role: result.role
    });

    return {
      msg: "User Role Added Successfully.",
      user_role: data.rows
    };
  };
};
module.exports = addUserRole;
