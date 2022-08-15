const makeCarEntity = ({data}) => {

  //insert here the data;
  const { serial_number, brand, model, color, year, car_status, image_file } = data;
  console.log(data);

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

  return Object.freeze(data);
};

module.exports = makeCarEntity;
