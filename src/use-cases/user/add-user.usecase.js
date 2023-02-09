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

    const data = await userDB.addUser({
      username: result.username,
      password: result.password,
      name: result.name,
      address: result.address,
      contact_number: result.contact_number,
      user_role_id: result.user_role_id
    });

    return {
      msg: "User added successfully.",
      user: data.rows
    }
  };
};                                                                                    
module.exports = addUser;
