const softDelSalesperson = ({ salespersonDB }) => {
    return async function deleteSalesperson(info) {
      const { id } = info;
  
      const result = await salespersonDB.softDeleteSalesperson(id);
      return { message: "Salesperson Deleted Successfully", data: result.rows };
    };
  };
  
  module.exports = softDelSalesperson;
  