const editCar = ({ carDB, carEntity }) => {
    return async function putCar({id, ...info}) {
      const result = carEntity(info);
      // const carExists = await carDB.findBySerial(result.serial_number, id);
  
    
      //TODO: change rowCount into something that does not count all the data (Breakdown and Compare only the Serial Number of the existing car )

      // if (carExists.rowCount !== 0) {
      //   const result = {
      //     msg: "Serial Number already exists"
      //   };
      //   return result;
      // }

  
     const data = await carDB.editCar({
        id: id,
        serial_number: result.serial_number,
        brand: result.brand,
        model: result.model,
        color: result.color,
        price: result.price,
        year: result.year,
        brand_new: result.brand_new,
        image_file: result.image_file,
      });

      return {
        msg: "Car Updated Successfully",
        data: data.rows
      }

    };
  };
  module.exports = editCar;
  
