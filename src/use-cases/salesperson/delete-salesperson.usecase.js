const softDelSalesperson = ({ salespersonDB }) => {
    return async function deleteSalesperson(info) {
      const { id } = info;
  
      const result = await salespersonDB.softDeleteSalesperson(id);
      return result.rows;
    };
  };
  
  module.exports = softDelSalesperson;
  