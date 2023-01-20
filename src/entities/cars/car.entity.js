const makeCarEntity = ({}) => {
  return function createCar(car) {
    const { model, color, brand_name, serial_number, qty, unit, cost } = car;

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

    if (!unit) {
      throw new Error("Car must have a unit!");
    }

    if (!cost) {
      throw new Error("Car must have a cost!");
    }

    return Object.freeze({
      serial_number,
      brand_name,
      model,
      color,
      qty,
      unit,
      cost
    });
  };
};

module.exports = makeCarEntity;
