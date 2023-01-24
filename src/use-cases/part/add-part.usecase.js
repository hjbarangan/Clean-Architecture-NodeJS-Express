const addPart = ({ partDB, partEntity }) => {
  return async function postPart(info) {
    const result = partEntity(info);

    const data = await partDB.addPart({
      printname: result.printname,
      barcode: result.barcode,
      unit: result.unit,
      qty: result.qty,
      qtybalance: result.qtybalance,
      cost: result.cost
    });

    return {
      msg: "Part Added Successfully",
      data: data.rows
    };

  };
};
module.exports = addPart;
