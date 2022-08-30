const tokenChecker = ({ jwt, SECRET_KEY }) => {
  function checker(req, res, next) {
    const token = req.header("Authorization");
    console.log(token);

    //TODO: auth error response
    if (!token) {
      console.log("Auth error");
    }
    if (!token) return res.status(401).json({ message: "Auth Error" });

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded.user;
      next();
    } catch (err) {
      console.error(err);

      //TODO: Invalid token response

      res.status(500).send({ message: "Invalid Token" });
    }
  }
  return checker;
};

module.exports = tokenChecker;
