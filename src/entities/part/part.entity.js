const makePartEntity = ({}) => {
  return function createPart(part) {
    const { sku_id, printname, barcode } = part;

    if (!sku_id) {
      throw new Error("SKU is required.");
    }
    if (!printname) {
      throw new Error("Printname is required.");
    }
    if (!barcode) {
      throw new Error("Barcode is required.");
    }

    return Object.freeze({
      sku_id,
      printname,
      barcode
    });
  };
};

module.exports = makePartEntity;
