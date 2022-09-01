const createTicketController = ({ createTicketUseCase }) => {
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
      const service_ticket = await createTicketUseCase(toView);

      return {
        headers: {
          "Content-Type": "application/json",
        },
        statusCode: 200,
        body: { service_ticket },
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

module.exports = createTicketController;
