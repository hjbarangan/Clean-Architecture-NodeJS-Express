
const userData = ({
  dbs,
  encrypt,
  authService,
  comparePassword,
  encryptPassword,
  jwtGenerate,
}) => {
  return Object.freeze({
    getAllUsers,
    getUserById,
    addUser,
    editUser,
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
      "INSERT INTO users (email, password, firstname, lastname ) VALUES ( $1, $2, $3, $4 ) RETURNING *;";

    let hashedPassword = await encryptPassword(password);

    const params = [email, hashedPassword, firstname, lastname];

    console.log(params);
    return connect.query(sql, params);
  }
};

async function editUser(user) {
  const connect = await dbs();
  const { email, password, firstname, lastname, id } = user;
  const sql =
    "UPDATE users SET email = $1, password = $2, firstname = $3, lastname = $4,  updated_at = NOW() WHERE user_id = $5 RETURNING *";
  const params = [email, password, firstname, lastname, id];
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

    console.log({ password: encryptPass, compared: validPassword})

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
