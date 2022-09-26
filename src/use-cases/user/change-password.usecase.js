const changePassword = ({ userDB, changePasswordEntity }) => {
  return async function putPassword({ id, password }) {
    const result = changePasswordEntity({password});

    return userDB.changeUserPassword({
      id: id,
      password: result.password
 
    });
  };
};
module.exports = changePassword;
