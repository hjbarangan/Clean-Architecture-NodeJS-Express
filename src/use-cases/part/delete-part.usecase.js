const softDelPart = ({ partDB }) => {
  return async function deletePart(info) {
    const { id } = info;

    const result = await partDB.softDeletePart(id);
    return { message: "Part Deleted Successfully", data: result.rows };
  };
};

module.exports = softDelPart;
