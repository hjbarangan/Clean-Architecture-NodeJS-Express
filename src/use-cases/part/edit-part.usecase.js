const editPart = ({ partDB, partEntity }) => {
  return async function putPart({ id, ...partInfo }) {
    const result = partEntity(partInfo);

    return partDB.editPart({
      id: id,
      part_number: result.part_number,
      part_name: result.part_name,
      purchase_price: result.purchase_price,
      retail_price: result.retail_price
    });
  };
};
module.exports = editPart;
