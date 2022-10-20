const fetchAllCustomersController = ({ viewAllCustomersUseCase }) => {
  return async function getAll(httpRequest, redisClient) {
    const headers = {
      "Content-Type": "application/json"
    };
    try {
      const { source = {}, ...info } = httpRequest.body;
      source.ip = httpRequest.ip;
      source.browser = httpRequest.headers["User-Agent"];
      const toView = {
        ...info,
        source
      };

      let key = "customers_list";
      let cache_data = await redisClient.get(key);
      let result;

      if (cache_data) {
        result = cache_data;
      } else {
        result = await viewAllCustomersUseCase(toView);
        await redisClient.set(key, result);
        console.log(`Key ${key} is inserted.`);
      }

      // fetch all customers without redis
      // const customers = await viewAllCustomersUseCase(toView);

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: result
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

module.exports = fetchAllCustomersController;
