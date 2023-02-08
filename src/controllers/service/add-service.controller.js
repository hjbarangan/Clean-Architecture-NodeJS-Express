const addServiceController = ({ addServiceUseCase }) => {
  return async function post(httpRequest) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const response = {
        ...info,
        source
      };
      //console.log(httpRequest.headers["Authorization"])
      const services = await addServiceUseCase(response);
      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: services
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

module.exports = addServiceController;
