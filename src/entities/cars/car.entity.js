const makeCarEntity = ({}) => {

  return function createCar(car) {
    const { serial_number, brand, model, color, year, car_for_sale, price, brand_new, image_file } = car;

    if (!serial_number) {
      throw new Error('Car must have serial number!');
    }

    if (!brand) {
      throw new Error('Car must have brand!');
    }

    if (!model) {
      throw new Error('Car must have model!');
    }

    if (!color) {
      throw new Error('Car must have color!');
    }

    if (!year) {
      throw new Error('Car must have year!');
    }

    if (isNaN(year)) {
      throw new Error('Invalid Year!');
    }


    if (!price) {
      throw new Error('Car must have car price!');
    }

    if (isNaN(price)) {
      throw new Error('Price should be a number!');
    }

    if (brand_new == null) {
      throw new Error('Is car brand new or second hand?');
    }

    if(!image_file) {
      throw new Error('Image should be provided!');
    }

    return Object.freeze({
      serial_number,
      brand,
      model,
      color,
      year,
      car_for_sale,
      price,
      brand_new,
      image_file
    });
  };
};

module.exports = makeCarEntity;
