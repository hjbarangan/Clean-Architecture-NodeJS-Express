const editCar = ({ carDB, carEntity }) => {
    return async function putCar({id, ...info}) {
      const result = carEntity(info);

     const data = await carDB.editCar({
        id: id,
        serial_number: result.serial_number,
        brand_name: result.brand_name,
        model: result.model,
        color: result.color,
        sku_id: result.sku_id,
      });

      return {
        msg: "Car Updated Successfully",
        data: data.rows
      }

    };
  };
  module.exports = editCar;
  
