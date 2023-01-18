const addUser = ({ userDB, userEntity }) => {
  return async function postUser(info) {
    const result = userEntity(info);
    const userExists = await userDB.findByUsername(result.username);

    if (userExists.rowCount !== 0) {
      const result = {
        msg: "User already exists",
        user: userExists.rows
      };
      return result;
    }

    return userDB.addUser({
      username: result.username,
      password: result.password,
      firstname: result.firstname,
      lastname: result.lastname
    });
  };
};
module.exports = addUser;
