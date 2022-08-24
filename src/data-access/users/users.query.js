const userData = ({ dbs, comparePassword, encryptPass1, jwtGenerate }) => {
  return Object.freeze({
    getAllUsers,
    getUserById,
    addUser,
    editUser,
    findByEmail,
    userLogin,
  });

  //insert here the queries
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

  async function addUser({ ...info }) {
    const connect = await dbs();

    const sql =
      "INSERT INTO users (email, password, firstname, lastname ) VALUES ( $1, $2, $3, $4 ) RETURNING *;";

    // // let hashedPassword = encryptPass1.encryptPass({password});
    // const result3 = [email, hashedPassword,firstname, lastname];
    const params = [info.email, info.password, info.firstname, info.lastname];
    console.log(params);

    return connect.query(sql, params);
  }
  
};

  async function editUser({ id, ...info }) {
    const connect = await dbs();

    const sql =
      "UPDATE users SET email = $1, password = $2, firstname = $3, lastname = $4,  updated_at = NOW() WHERE user_id = $5 RETURNING *";

    const params = [
      info.email,
      info.password,
      info.firstname,
      info.lastname,
      id,
    ];

    return connect.query(sql, params);
  }



  async function userLogin(data) {
    try {
      const connect = await dbs();

      const { email, password } = data;

      const sql = "SELECT * FROM users WHERE email = $1";

      const params = [email];

      const user = await connect.query(sql, params);

      const encryptPass = user.rows[0].password;
      const validPassword = await comparePassword(password, encryptPass);

      if (!validPassword) {
        return res.status(401).json({ message: "Invalid password" });
      } else {
        const token = jwtGenerate(user.rows[0].user_id);
        console.log({ token: token, user: user.rows });
      }
    } catch (error) {
      console.log("Errawr!");
    }
  }



module.exports = userData;
