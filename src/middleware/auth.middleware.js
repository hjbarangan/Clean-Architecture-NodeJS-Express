const tokenChecker = ({ jwt, SECRET_KEY }) => {
  function checker(req, res, next) {
    const token = req.header("Authorization")

    if (!token) {
      return res.status(401).json({ message: "You need to login first." })
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY)
      req.user = decoded.user
      next()
    } catch (err) {
      console.error(err)
      res.status(401).send({ message: "Invalid Token" })
    }
  }
  return checker
}

module.exports = tokenChecker
