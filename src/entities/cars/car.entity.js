const makeCarEntity = ({}) => {
  return function createCar(car) {
    const { serial_number, brand, model, color, year, car_for_sale, price } = car;

    if (!serial_number) {
      throw new Error("Car must have serial number!");
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

    if (!price) {
      throw new Error("Car must have car price!");
    }

    if (isNaN(price)) {
      throw new Error("Price should be a number!");
    }

    return Object.freeze({
      serial_number,
      brand,
      model,
      color,
      year,
      car_for_sale,
      price,
    });
  };
};

module.exports = makeCarEntity;
