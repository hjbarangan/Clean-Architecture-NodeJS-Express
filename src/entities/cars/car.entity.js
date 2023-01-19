const makeCarEntity = ({}) => {
  return function createCar(car) {
    const { sku_id, model, color, brand_name, serial_number } = car;

    if (!sku_id) {
      throw new Error("Car must have serial number!");
    }

    if (!serial_number) {
      throw new Error("Car must have serial number!");
    }

    if (!brand_name) {
      throw new Error("Car must have brand!");
    }

    if (!model) {
      throw new Error("Car must have model!");
    }

    if (!color) {
      throw new Error("Car must have color!");
    }

    return Object.freeze({
      serial_number,
      brand_name,
      model,
      color,
      sku_id
    });
  };
};

module.exports = makeCarEntity;
