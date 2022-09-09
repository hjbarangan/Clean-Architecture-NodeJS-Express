const viewMechanic = ({ mechanicDB }) => {
    return async function viewMechanic(info) {
      const { id } = info;
  
      const result = await mechanicDB.getMechanicById(id);
      return result.rows;
    };
  };
  
  module.exports = viewMechanic;
  