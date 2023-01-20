const editPart = ({ partDB, partEntity }) => {
  return async function putPart({ id, ...partInfo }) {
    const result = partEntity(partInfo);

    return partDB.editPart({
      id: id,
      printname: result.printname,
      barcode: result.barcode,
      unit: result.unit,
      qty: result.qty,
      cost: result.cost
    });
  };
};
module.exports = editPart;
