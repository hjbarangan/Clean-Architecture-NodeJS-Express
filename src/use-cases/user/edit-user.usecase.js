const editUser = ({ userDB, userUpdateEntity }) => {
  return async function putUser({ id, name, address, contact_number }) {
    const result = userUpdateEntity({ name, address, contact_number });

    return userDB.editUser({
      id: id,
      name: result.name,
      address: result.address,
      contact_number: result.contact_number
    });
  };
};
module.exports = editUser;
