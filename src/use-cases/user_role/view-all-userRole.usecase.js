const viewAllUserRole = ({ userRoleDB }) => {
  return async function viewUserRoles() {
    const result = await userRoleDB.getAllUserRoles();
    return result.rows;
  };
};

module.exports = viewAllUserRole;
