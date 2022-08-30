const makeUserLoginEntity = ({}) => {
    return function loginUser(user) {
      const { email, password} = user;
  
      if (!email) {
        throw new Error("Enter Email!");
      }
  
      if (!password) {
        throw new Error("Enter Password!");
      }

  
      return Object.freeze({
        email,
        password
      });
    };
  };
  
  module.exports = makeUserLoginEntity;
  