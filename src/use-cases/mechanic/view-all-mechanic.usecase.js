const viewAllMechanic = ({ mechanicDB }) => {
  return async function viewMechanics() {
    const result = await mechanicDB.getAllMechanics();
    return result.rows;
  };
};

module.exports = viewAllMechanic;
