const loginUser = ({
  userDB,
  userLoginEntity,
  jwtGenerate,
  comparePassword,
}) => {
  return async function postLoginUser(info) {
    const result = userLoginEntity(info);
    const userExists = await userDB.findByEmail(result.email);
    let token = "";

    if (userExists.rowCount === 0) {
      throw new Error("User does not exist!");
      // const result = { msg: "User does not exist!" };
      // return result;
    }

    const validPass = await comparePassword(
      result.password,
      userExists.rows[0].password
    );

    if (validPass) {
      token = jwtGenerate(userExists.rows[0].user_id);
      // console.log("\x1b[35m%s\x1b[0m", { token: token });
    } else {
      throw new Error("Incorrect Password!");
    }

    return {
      token: token,
      user_id: userExists.rows[0].user_id,
      email: userExists.rows[0].email,
      firstname: userExists.rows[0].firstname,
      lastname: userExists.rows[0].lastname,
    };
  };
};
module.exports = loginUser;
