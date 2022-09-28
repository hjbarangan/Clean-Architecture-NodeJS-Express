const editUser = ({ userDB, userUpdateEntity }) => {
  return async function putUser({ id, firstname, lastname, password }) {
    const result =  userUpdateEntity({firstname, lastname, password });
   

    return userDB.editUser({
      id: id,
      firstname: result.firstname,
      lastname: result.lastname,
      password: result.password
    });
  };
};
module.exports = editUser;
