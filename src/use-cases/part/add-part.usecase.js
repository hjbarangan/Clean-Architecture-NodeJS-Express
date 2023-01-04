const addPart = ({ partDB, partEntity }) => {
  return async function postPart(info) {
    const result = partEntity(info);

    return partDB.addPart({
      part_number: result.part_number,
      part_name: result.part_name,
      purchase_price: result.purchase_price,
      retail_price: result.retail_price
    });
  };
};
module.exports = addPart;
