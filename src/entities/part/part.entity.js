const makePartEntity = ({}) => {
  return function createPart(part) {
    const { part_name, purchase_price, retail_price } = part;

    if (!part_name) {
      throw new Error("Part name is required.");
    }
    if (!purchase_price) {
      throw new Error("Purchase Price is required.");
    }
    if (!retail_price) {
      throw new Error("Retail Price is required.");
    }

    return Object.freeze({
      part_name,
      purchase_price,
      retail_price
    });
  };
};

module.exports = makePartEntity;
