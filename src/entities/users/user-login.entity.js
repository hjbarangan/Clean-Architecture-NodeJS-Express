const makeUserLoginEntity = ({}) => {
    return function loginUser(user) {
      const { email, password} = user;
  
      if (!email) {
        throw new Error("Car must have email!");
      }
  
      if (!password) {
        throw new Error("Car must have password!");
      }

  
      return Object.freeze({
        email,
        password
      });
    };
  };
  
  module.exports = makeUserLoginEntity;
  