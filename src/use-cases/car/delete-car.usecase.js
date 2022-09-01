const softDelCar = ({ carDB }) => {
    return async function deleteCar(info) {
      const { id } = info;
  
      const result = await carDB.softDeleteCar(id);
      return result.rows;
    };
  };
  
  module.exports = softDelCar;
  