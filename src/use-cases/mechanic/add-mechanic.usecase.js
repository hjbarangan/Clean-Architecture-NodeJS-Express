const addMechanic = ({ mechanicDB, mechanicEntity }) => {
    return async function postMechanic(info) {
      const result = mechanicEntity(info);

      
      return mechanicDB.addMechanic({
        firstname: result.firstname,
        lastname: result.lastname,
        contact: result.contact
    });

    };
  };
  module.exports = addMechanic;
  
  
  