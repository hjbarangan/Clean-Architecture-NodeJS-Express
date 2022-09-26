const changeUserPassController = ({ changePasswordUseCase }) => {
  return async function putUserPass(httpRequest) {
    const headers = {
      "Content-Type": "application/json",
    };
    try {
      const { source = {}, password } = httpRequest.body;
      console.log(password);
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        password,
        source,
        id: httpRequest.params.id,
      };
      console.log(toView);
      const response = await changePasswordUseCase(toView);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body:  response ,
      };
    } catch (e) {
      console.log(e);
      return {
        headers,
        statusCode: 400,
        body: {
          error: e.message,
        },
      };
    }
  };
};

module.exports = changeUserPassController;
