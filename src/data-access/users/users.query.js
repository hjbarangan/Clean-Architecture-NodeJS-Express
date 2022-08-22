const userData = ({ dbs, comparePassword }) => {
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

  async function findByEmail(email) {
    const connect = await dbs();

    const sql = "SELECT * FROM users WHERE email = $1";

    const params = [email];

    return connect.query(sql, params);
  }


  async function userLogin(data) {
    try {
      const connect = await dbs();

      const { email, password } = data;

      const sql = "SELECT * FROM users WHERE email = $1";

      const params = [email];

      const user = await connect.query(sql, params);

      const validPassword = await comparePassword(
        password,
        user.rows[0].password
      );

      if (!validPassword) {
        return res.status(401).json({ message: "Invalid password" });
      } else {
        const token = jwtGenerator(user.rows[0].user_id);
        console.log({ token: token, user: user.rows });
      }
    } catch (error) {
      console.log("Errawr!");
    }
  }

  //  async function createUser({ entity }){
  //      try {
  //          const {email, password, role, status} = entity;
  //          const User = model.UserModel;

  //          let encryptedpwd = encryptPasswordService({password})

  //          const response = await User.create({
  //              email: email,
  //              password: encryptedpwd,
  //              role: role,
  //              status: status,
  //          });
  //          return response.dataValues;
  //      } catch (error) {
  //          console.log("Error: ", error);
  //      }
  //  }

  async function addUser({ info }) {
    const connect = await dbs();

    const { email, password, firstname, lastname } = info;

    const sql =
      "INSERT INTO users (email, password, firstname, lastname, created_at, updated_at) VALUES ( $1, $2, $3, $4, NOW(), NOW()) RETURNING *;";

    // const data = [info.email, info.password, info.firstname, info.lastname];

    const hashedPassword = await encryptPassword({ password });

    const result = {
      email: email,
      password: hashedPassword,
      firstname: firstname,
      lastname: lastname,
    };

    return connect.query(sql, result);
  }
};

module.exports = userData;
