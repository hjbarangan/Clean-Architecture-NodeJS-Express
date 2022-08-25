const editSalesperson = ({ salespersonDB, salespersonEntity }) => {
    return async function putSalesperson({ id, ...salespersonInfo }) {
      const result = salespersonEntity(salespersonInfo);
  
      return salespersonDB.editSalesperson({
        id: id,
        firstname: result.firstname,
        lastname: result.lastname
      });
    };
  };
  module.exports = editSalesperson;
  