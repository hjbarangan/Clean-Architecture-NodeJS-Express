const softDelMechanic = ({ mechanicDB }) => {
  return async function deleteMechanic(info) {
    const { id } = info;
    const result = await mechanicDB.softDeleteMechanic(id);
    return { message: "Mechanic Deleted Successfully", data: result.rows };
  };
};

module.exports = softDelMechanic;
