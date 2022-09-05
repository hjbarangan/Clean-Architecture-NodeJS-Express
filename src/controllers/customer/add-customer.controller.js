
const addCustomerController = ({ addCustomerUseCase }) => {

    return async function post(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        
        const { source = {}, ...info } = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];
        const toView = {
          ...info,
          source,
        };
        const customers = await addCustomerUseCase(toView);
  
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body:  customers ,
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
  
  }
  
  module.exports = addCustomerController;