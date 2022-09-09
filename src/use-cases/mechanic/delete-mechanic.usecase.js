const softDelMechanic = ({ mechanicDB }) => {
    return async function deleteMechanic(info) {
      const { id } = info;
  
      const result = await mechanicDB.softDeleteMechanic(id);
      return result.rows;
    };
  };
  
  module.exports = softDelMechanic;
  