const editUser = ({ userDB, userUpdateEntity }) => {
  return async function putUser(user) {
    const {
      username,
      password,
      name,
      address,
      contact_number,
      user_role_id,
      id
    } = user;
    const result = userUpdateEntity({
      username,
      password,
      name,
      address,
      contact_number,
      user_role_id
    });

    return userDB.editUser({
      id: id,
      username: result.username,
      password: result.password,
      name: result.name,
      address: result.address,
      contact_number: result.contact_number,
      user_role_id: result.user_role_id
    });
  };
};
module.exports = editUser;
