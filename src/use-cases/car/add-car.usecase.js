const addCar = ({ carDB, carEntity }) => {
  return async function postCar(info, image_file) {
    const result = carEntity(info, image_file);
    const carExists = await carDB.findBySerial(result.serial_number);

    if (carExists.rowCount !== 0) {
      const result = {
        msg: "Serial Number already exists",
        car: carExists.rows
      };
      return result;
    }

    const data = await carDB.addCar({
      serial_number: result.serial_number,
      brand: result.brand,
      model: result.model,
      color: result.color,
      year: result.year,
      brand_new: result.brand_new,
      car_for_sale: result.car_for_sale,
      price: result.price,
      image_file: result.image_file
    });

    return {
      msg: "Car Added Successfully",
      data: data.rows
    };
  };
};
module.exports = addCar;
