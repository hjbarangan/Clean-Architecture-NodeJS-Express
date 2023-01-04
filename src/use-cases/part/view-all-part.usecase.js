const viewAllPart = ({ partDB }) => {
  return async function viewParts() {
    const result = await partDB.getAllParts();
    return result.rows;
  };
};

module.exports = viewAllPart;
