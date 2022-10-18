const viewCar = ({ carDB }) => {
  return async function viewCar(info) {
    const { id } = info;
    const result = await carDB.getCarById(id);
    return result.rows;
  };
};

module.exports = viewCar;
