const viewPart = ({ partDB }) => {
  return async function viewPart(info) {
    const { id } = info;
    const result = await partDB.getPartById(id);
    return result.rows;
  };
};

module.exports = viewPart;
