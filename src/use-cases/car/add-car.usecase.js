const addCar = ({ carDB, carEntity }) => {
  return async function postCar(info) {
    const result = carEntity(info);
    const carExists = await carDB.findBySerial(result.serial_number);

    if (carExists.rowCount !== 0) {
      const result = {
        msg: "Serial Number already exists",
        car: carExists.rows,
      };
      return result;
    }

    return carDB.addCar({
      serial_number: result.serial_number,
      brand: result.brand,
      model: result.model,
      color: result.color,
      year: result.year,
      car_for_sale: result.car_for_sale,
      price: result.price
    });
  };
};
module.exports = addCar;


