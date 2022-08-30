const loginUser = ({ userDB, userLoginEntity }) => {
  return async function postLoginUser(info) {
    const result = userLoginEntity(info);
    const userExists = await userDB.findByEmail(result.email);

    if (userExists.rowCount == 0) {
      const result = {
        msg: "Email does not exist!"
      };
      return result;
    }

    //TODO: if conditions when the credentials are incorrect/invalid.



    //TODO: generate token 

    

    return userDB.userLogin({
      email: result.email, password: result.password, firstname: result.firstname, lastname: result.lastname
    });
  };
};
module.exports = loginUser;
