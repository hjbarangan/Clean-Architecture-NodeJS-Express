const editMechanic = ({ mechanicDB, mechanicEntity }) => {
  return async function putMechanic({ id, ...mechanicInfo }) {
    
    const result = mechanicEntity(mechanicInfo);

    return mechanicDB.editMechanic({
      id: id,
      firstname: result.firstname,
      lastname: result.lastname,
      contact: result.contact
    });
  };
};
module.exports = editMechanic;
