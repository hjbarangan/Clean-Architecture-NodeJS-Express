const makeCarEntity = ({}) => {
  return function createCar(car) {
    const { serial_number, brand, model, color, year, car_for_sale } = car;

    if (!serial_number) {
      throw new Error("Car must have serial_number!");
    }

    if (!brand) {
      throw new Error("Car must have brand!");
    }

    if (!model) {
      throw new Error("Car must have model!");
    }

    if (!color) {
      throw new Error("Car must have color!");
    }

    if (!year) {
      throw new Error("Car must have year!");
    }

    if (!car_for_sale) {
      throw new Error("Car must have car status!");
    }
    return Object.freeze({
      serial_number,
      brand,
      model,
      color,
      year,
      car_for_sale,
    });
  };
};

module.exports = makeCarEntity;
