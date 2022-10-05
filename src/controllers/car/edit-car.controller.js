const editCarController = ({ editCarUseCase }) => {
  return async function post(httpRequest) {
    try {
      const { source = {},  ...info } = httpRequest.body
      source.ip = httpRequest.ip
      source.browser = httpRequest.headers["User-Agent"]

      if (httpRequest.headers["Referer"]) {
        source.referrer = httpRequest.headers["Referrer"]
      }

     
      // const image_file = `${httpRequest.protocol}://${httpRequest.host}/${httpRequest.file.path.replace(/\\/g,"/")}`
      const image_file = httpRequest.file.path.replace(/\\/g,"/")

      const response = {
        ...info,
        source,
        image_file,
        id: httpRequest.params.id,
      }

      const cars = await editCarUseCase(response)

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 200,
        body: cars
      }
    } catch (err) {
      console.log(err)

      return {
        headers: {
          "Content-Type": "application/json"
        },
        statusCode: 400,
        body: {
          error: err.message
        }
      }
    }
  }
}

module.exports = editCarController
