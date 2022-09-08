
const fetchMechanicDetailsController = ({ viewMechanicUseCase }) => {

    return async function getDetails(httpRequest) {
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
          id: httpRequest.params.id,
        };
        const mechanic = await viewMechanicUseCase(toView);
  
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body:  mechanic ,
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
  
  module.exports = fetchMechanicDetailsController;