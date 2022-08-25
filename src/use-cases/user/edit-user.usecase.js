const editUser = ({ userDB, userEntity }) => {
  return async function putCar({ id, info }) {
    const result = userEntity(info);
    const userExists = await userDB.findByEmail(result.email);

    if (userExists.rowCount !== 0) {
      const result = {
        msg: "Email already exists",
        user: userExists.rows,
      };
      return result;
    }

    return carDB.editUser({
      id: id,
      email: result.email,
      password: result.password,
      firstname: result.firstname,
      lastname: result.lastname,
    });
  };
};
module.exports = editUser;
