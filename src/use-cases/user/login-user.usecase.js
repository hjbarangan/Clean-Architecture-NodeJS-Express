const loginUser = ({
  userDB,
  userLoginEntity,
  generateToken,
  comparePassword
}) => {
  return async function postLoginUser(info) {
    const result = userLoginEntity(info);
    const userExists = await userDB.findByUsername(result.username);
    let token;

    if (userExists.rowCount === 0) {
      throw new Error("User does not exist!");
    }

    if (userExists.rows[0].is_active === false) {
      throw new Error("User is already inactive!");
    }

    const validPass = await comparePassword(
      result.password,
      userExists.rows[0].password
    );

    if (validPass) {
      token = generateToken(userExists.rows[0].user_id);
    } else {
      throw new Error("Incorrect Password!");
    }

    return {
      token: token,
      user_id: userExists.rows[0].user_id,
      username: userExists.rows[0].username,
      name: userExists.rows[0].name,
      address: userExists.rows[0].address,
      contact_number: userExists.rows[0].contact_number
    };
  };
};
module.exports = loginUser;
