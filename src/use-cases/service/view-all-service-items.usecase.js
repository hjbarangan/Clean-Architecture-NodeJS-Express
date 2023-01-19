const viewAllServiceItems = ({ serviceDB }) => {
  return async function viewServiceItems() {
    const result = await serviceDB.getAllServiceItems();
    return result.rows;
  };
};

module.exports = viewAllServiceItems;
