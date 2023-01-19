const addPart = ({ partDB, partEntity }) => {
  return async function postPart(info) {
    const result = partEntity(info);

    return partDB.addPart({
      sku_id: result.sku_id,
      printname: result.printname,
      barcode: result.barcode,
    });
  };
};
module.exports = addPart;
