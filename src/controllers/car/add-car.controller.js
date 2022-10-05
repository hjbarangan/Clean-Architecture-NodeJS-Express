const addCarController = ({ addCarUseCase }) => {
  return async function post(httpRequest) {
    try {
      const { source = {},  ...info } = httpRequest.body
      source.ip = httpRequest.ip
      source.browser = httpRequest.headers["User-Agent"]

      if (httpRequest.headers["Referer"]) {
        source.referrer = httpRequest.headers["Referrer"]
      }

      //image upload
      // const image_file = `${httpRequest.protocol}://${httpRequest.host}/${httpRequest.file.path.replace(/\\/g,"/")}`
      const image_file = httpRequest.file.path.replace(/\\/g,"/")

      const response = {
        ...info,
        source,
        image_file
      }

      const cars = await addCarUseCase(response)

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

module.exports = addCarController
