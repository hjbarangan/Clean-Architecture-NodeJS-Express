const userData = ({ dbs, encryptPassword, comparePassword, jwtGenerate }) => {
  return Object.freeze({
    getAllUsers,
    getUserById,
    addUser,
    editUser,
    softDeleteUser,
    findByEmail,
    userLogin,
  });

  async function getAllUsers() {
    const connect = await dbs();
    const sql = "SELECT * FROM users";
    return connect.query(sql);
  }

  async function getUserById(id) {
    const connect = await dbs();
    const sql = "SELECT * FROM users WHERE user_id = $1";
    const params = [id];
    return connect.query(sql, params);
  }

  async function findByEmail(email) {
    const connect = await dbs();
    const sql = "SELECT * FROM users WHERE email = $1";
    const params = [email];
    return connect.query(sql, params);
  }

  async function addUser(user) {
    const connect = await dbs();
    const { email, password, firstname, lastname } = user;
    const sql =
      "INSERT INTO users (email, password, firstname, lastname, created_at, updated_at, is_active) VALUES ( $1, $2, $3, $4, localtimestamp, localtimestamp, true) RETURNING *;";

    let hashedPassword = await encryptPassword(password);

    const params = [email, hashedPassword, firstname, lastname];

    console.log(params);
    return connect.query(sql, params);
  }

  async function editUser(user) {
    const connect = await dbs();
    const { email, password, firstname, lastname, id } = user;
    const sql =
      "UPDATE users SET email = $1, password = $2, firstname = $3, lastname = $4,  updated_at = localtimestamp WHERE user_id = $5 RETURNING *";
    const params = [email, password, firstname, lastname, id];
    return connect.query(sql, params);
  }

  async function softDeleteUser(id){
    const connect = await dbs();
    const sql = "UPDATE users SET is_active = false, inactive_at = localtimestamp WHERE user_id = $1 RETURNING *"  
    const params = [id]
    return connect.query(sql, params);
  }

  async function userLogin(body) {
    try {
      const connect = await dbs();
      const { email, password } = body;
      const params = [email];
      const sql = "SELECT * FROM users WHERE email = $1";
      const user = await connect.query(sql, params);

      const validPassword = await comparePassword(
        password,
        user.rows[0].password
      );

      console.log({
        password: password,
        encryptedPassword: user.rows[0].password,
        isItValid: validPassword,
      });

      let result = {};
      if (validPassword) {
        (result.id = user.rows[0].user_id),
          (result.firstname = user.rows[0].firstname),
          (result.lastname = user.rows[0].lastname),
          (result.email = user.rows[0].email),
          (result.password = user.rows[0].password);
        console.log(result);
        return result;
      } else {
        return { msg: "Incorrect Credentials" };
      }
    } catch (error) {
      console.log(error);
    }
  }
};
module.exports = userData;
