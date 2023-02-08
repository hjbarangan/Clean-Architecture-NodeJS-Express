const changeUserPassController = ({ changePasswordUseCase }) => {
  return async function putUserPass(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { source = {}, password } = httpRequest.body;
      //console.log(password);
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const response = {
        password,
        source,
        id: httpRequest.params.id
      };

      const user = await changePasswordUseCase(response);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: user
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

module.exports = changeUserPassController;
