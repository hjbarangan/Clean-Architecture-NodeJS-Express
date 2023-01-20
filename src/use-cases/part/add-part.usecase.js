const addPart = ({ partDB, partEntity }) => {
  return async function postPart(info) {
    const result = partEntity(info);

    return partDB.addPart({
      printname: result.printname,
      barcode: result.barcode,
      unit: result.unit,
      qty: result.qty,
      cost: result.cost
    });
  };
};
module.exports = addPart;
