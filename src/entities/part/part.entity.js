const makePartEntity = ({}) => {
  return function createPart(part) {
    const { printname, barcode, cost, unit, qty } = part;

    if (!printname) {
      throw new Error("Printname is required.");
    }
    if (!barcode) {
      throw new Error("Barcode is required.");
    }
    if (!cost) {
      throw new Error("Cost is required.");
    }
    if (!unit) {
      throw new Error("Unit is required.");
    }

    return Object.freeze({
      printname,
      barcode,
      cost,
      unit,
      qty
    });
  };
};

module.exports = makePartEntity;
