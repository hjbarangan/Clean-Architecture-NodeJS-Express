const editUser = ({ userDB, userUpdateEntity }) => {
  return async function putUser({ id, firstname, lastname }) {
    const result =  userUpdateEntity({firstname, lastname });
   

    return userDB.editUser({
      id: id,
      firstname: result.firstname,
      lastname: result.lastname,
    });
  };
};
module.exports = editUser;
