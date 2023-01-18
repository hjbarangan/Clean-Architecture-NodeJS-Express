const addUserRoleController = ({ addUserRoleUseCase }) => {
  return async function post(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { ...info } = httpRequest.body;

      const toView = {
        ...info
      };
      const user_roles = await addUserRoleUseCase(toView);
      console.log("meow", user_roles);
      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: user_roles
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message
        }
      };
    }
  };
};

module.exports = addUserRoleController;
