const softDelCar = ({ carDB, fs }) => {
  return async function deleteCar(info) {
    const { id } = info;

    const result = await carDB.softDeleteCar(id);

    fs.unlinkSync(result.rows[0].image_file),
      (error) => {
        if (error) {
          throw new error(`Could not delete the image file. ${error}`);
        }
      };

    return { msg: "Deleted Successfully", data: result.rows };
  };
};

module.exports = softDelCar;
