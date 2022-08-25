const viewAllUsers = ({ userDB }) => {
    return async function viewUsers() {
      const result = await userDB.getAllUsers();
      return result.rows;
    };
  };
  
  module.exports = viewAllUsers;
  