const loginUser = ({ userDB, userLoginEntity }) => {
    return async function postLoginUser(info) {
      const result = userLoginEntity(info);
      const userExists = await userDB.findByEmail(result.email);
  
      if (userExists.rowCount == 0) {
        const result = {
          msg: "Email does not exist!",
          user: userExists.rows,
        };
        return result;
      }
  
      return userDB.loginUser({
        email: result.email,
        password: result.password
      });
    };
  };
  module.exports = loginUser;
  
  
  