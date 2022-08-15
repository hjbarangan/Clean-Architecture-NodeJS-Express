const makeCarEntity = () => {
  //insert here the data;

  // insert here the error message and conditions

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

  if (!car_status) {
    throw new Error("Car must have car status!");
  }

  if (!image_file) {
    throw new Error("Car must have an image_file!");
  }

  return Object.freeze({
    serial_number: serial_number,
    brand: brand,
    model: model,
    year: year,
    status: car_status,
    image_file: image_file
  });
};

module.exports = makeCarEntity;
