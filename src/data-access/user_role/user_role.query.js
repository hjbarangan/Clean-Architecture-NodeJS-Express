const serviceData = ({ dbs }) => {
  return Object.freeze({
    getAllUserRoles,
    getUserRoleById,
    addUserRole,
    editUserRole,
    softDeleteUserRole,
    findByUserRoleName
  });

  async function getAllUserRoles() {
    const connect = await dbs();
    const sql = "SELECT * FROM user_role ORDER BY user_role_id DESC";
    return connect.query(sql);
  }

  async function getUserRoleById(id) {
    const connect = await dbs();
    const sql = "SELECT * FROM user_role WHERE user_role_id = $1";
    const params = [id];
    return connect.query(sql, params);
  }

  async function addUserRole(user_role) {
    const connect = await dbs();
    const { role } = user_role;
    const params = [role];
    const sql =
      "INSERT INTO user_role ( role, date_created) VALUES ( $1, localtimestamp) RETURNING *;";
    return connect.query(sql, params);
  }

  async function editUserRole(user_role) {
    const connect = await dbs();
    const { role, id } = user_role;
    const params = [role, id];
    const sql =
      "UPDATE user_role SET role = $1 WHERE user_role_id = $2 RETURNING *";

    return connect.query(sql, params);
  }

  async function softDeleteUserRole(id) {
    const connect = await dbs();
    const sql =
      "UPDATE user_role SET is_active = false WHERE user_role_id = $1 RETURNING *";
    const params = [id];
    return connect.query(sql, params);
  }

  async function findByUserRoleName(role) {
    const connect = await dbs();
    const sql = "SELECT * FROM user_role WHERE role = $1";
    const params = [role];
    return connect.query(sql, params);
  }
};

module.exports = serviceData;
