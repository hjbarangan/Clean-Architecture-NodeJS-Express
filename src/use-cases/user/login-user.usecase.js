const loginUser = ({ userDB, userLoginEntity, jwtGenerate }) => {
  return async function postLoginUser(info) {
    const result = userLoginEntity(info);
    const userExists = await userDB.findByEmail(result.email);

    if (userExists.rowCount == 0) {
      const result = {
        msg: "Email does not exist!",
      };
      return result;
    }


    


    //DONE: return the generated token

    const token = jwtGenerate(userExists.rows[0].user_id);
    console.log("\x1b[35m%s\x1b[0m", {token: token});
    // console.log("\x1b[36m%s\x1b[0m", userExists.rows[0]);

    //TODO: fix the response token or add password validation here 
   
    
    return userDB.userLogin({
      user_id: result.user_id,
      email: result.email,
      password: result.password,
      firstname: result.firstname,
      lastname: result.lastname,
    });



    return ({
      token: token,
      user_id: result.user_id,
      email: result.email,
      password: result.password,
    });
    
  };

};
module.exports = loginUser;
