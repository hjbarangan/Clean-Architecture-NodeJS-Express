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
    try {
      const connect = await dbs();
      const sql = "SELECT * FROM user_role ORDER BY user_role_id DESC";
      return connect.query(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserRoleById(id) {
    try {
      const connect = await dbs();
      const sql = "SELECT * FROM user_role WHERE user_role_id = $1";
      const params = [id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function addUserRole(user_role) {
    try {
      const connect = await dbs();
      const { role } = user_role;
      const params = [role];
      const sql =
        "INSERT INTO user_role ( role, date_created) VALUES ( $1, localtimestamp) RETURNING *;";
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function editUserRole(user_role) {
    try {
      const connect = await dbs();
      const { role, id } = user_role;
      const params = [role, id];
      const sql =
        "UPDATE user_role SET role = $1 WHERE user_role_id = $2 RETURNING *";

      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function softDeleteUserRole(id) {
    try {
      const connect = await dbs();
      const sql =
        "UPDATE user_role SET is_active = false WHERE user_role_id = $1 RETURNING *";
      const params = [id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function findByUserRoleName(role) {
    try {
      const connect = await dbs();
      const sql = "SELECT * FROM user_role WHERE role = $1";
      const params = [role];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = serviceData;
