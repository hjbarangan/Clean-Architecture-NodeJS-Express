const softDelUserRole = ({ userRoleDB }) => {
  return async function deleteUserRole(info) {
    const { id } = info;

    const result = await userRoleDB.softDeletePart(id);
    return { message: "Part Deleted Successfully", data: result.rows };
  };
};

module.exports = softDelUserRole;
