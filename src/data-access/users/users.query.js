const userData = ({ dbs, encryptPassword, comparePassword }) => {
  return Object.freeze({
    getAllUsers,
    getUserById,
    addUser,
    editUser,
    changeUserPassword,
    softDeleteUser,
    findByUsername
  });

  async function getAllUsers() {
    try {
      const connect = await dbs();
      const sql =
        "SELECT * FROM users WHERE NOT is_active IN (false) ORDER BY user_id DESC";
      return connect.query(sql);
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserById(id) {
    try {
      const connect = await dbs();
      const sql = "SELECT * FROM users WHERE user_id = $1";
      const params = [id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function findByUsername(username) {
    try {
      const connect = await dbs();
      const sql = "SELECT * FROM users WHERE username = $1 ";
      const params = [username];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function addUser(user) {
    try {
      const connect = await dbs();
      const {
        name,
        contact_number,
        address,
        username,
        password,
        user_role_id
      } = user;
      const sql =
        "INSERT INTO users (name, contact_number, address, username, password, user_role_id, date_created, is_active) VALUES ( $1, $2, $3, $4, $5, $6, localtimestamp, true) RETURNING *;";

      let hashedPassword = await encryptPassword(password);

      const params = [
        name,
        contact_number,
        address,
        username,
        hashedPassword,
        user_role_id
      ];

      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function editUser(user) {
    try {
      const connect = await dbs();
      const { name, contact_number, address, password, user_role_id, id } =
        user;
      const sql =
        "UPDATE users SET name = $1, contact_number = $2, address = $3, user_role_id = $4, password = $5 WHERE user_id = $6 RETURNING *";
      let hashedPassword = await encryptPassword(password);

      const params = [
        name,
        contact_number,
        address,
        user_role_id,
        hashedPassword,
        id
      ];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function changeUserPassword({ password, id }) {
    try {
      const connect = await dbs();

      const sql =
        "UPDATE users SET password = $1 WHERE user_id = $2 RETURNING *";
      let hashedPassword = await encryptPassword(password);
      const params = [hashedPassword, id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }

  async function softDeleteUser(id) {
    try {
      const connect = await dbs();
      const sql =
        "UPDATE users SET is_active = false WHERE user_id = $1 RETURNING *";
      const params = [id];
      return connect.query(sql, params);
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = userData;
