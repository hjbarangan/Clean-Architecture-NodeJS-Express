const editCustomerController = ({ editCustomerUseCase }) => {
  return async function get(httpRequest, redisClient) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        ...info,
        source,
        id: httpRequest.params.id
      };

      let key = "customers_list";
      let deleteKey = await redisClient.clearKey(key);

      if (deleteKey) {
        console.log(deleteKey);
      }


      const response = await editCustomerUseCase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: response
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

module.exports = editCustomerController;
