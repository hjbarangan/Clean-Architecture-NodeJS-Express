const addSalesperson = ({ salespersonDB, salespersonEntity }) => {
    return async function postSalesperson(info) {
      const result = salespersonEntity(info);

      
      return salespersonDB.addSalesperson({
        firstname: result.firstname,
        lastname: result.lastname,
        contact: result.contact
    });

    };
  };
  module.exports = addSalesperson;
  
  
  