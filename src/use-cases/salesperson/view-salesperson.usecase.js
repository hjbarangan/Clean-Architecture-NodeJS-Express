const viewSalesperson = ({ salespersonDB }) => {
  return async function viewSalesperson(info) {
    const { id } = info;
    const result = await salespersonDB.getSalespersonById(id);
    return result.rows;
  };
};

module.exports = viewSalesperson;
