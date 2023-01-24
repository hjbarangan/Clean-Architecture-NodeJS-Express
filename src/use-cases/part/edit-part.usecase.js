const editPart = ({ partDB, partEntity }) => {
  return async function putPart({ id, ...partInfo }) {
    const result = partEntity(partInfo);

    const data = await partDB.editPart({
      id: id,
      printname: result.printname,
      barcode: result.barcode,
      unit: result.unit,
      qty: result.qty,
      cost: result.cost
    });

    return {
      msg: "Part Updated Successfully",
      data: data.rows
    };
  };
};
module.exports = editPart;
