const tokenChecker = ({ jwt, SECRET_KEY }) => {
  function checker(req, res, next) {
    const bearerHeader = req.header("Authorization");

    if (!bearerHeader) {
      return res
        .status(403)
        .json({ message: "A token is required for authentication." });
    }

    try {
      const bearerToken = bearerHeader.split(" ")[1];
      const decoded = jwt.verify(bearerToken, SECRET_KEY);
      req.user = decoded.user;
      //console.log("user", decoded.user)
      next();

      // const bearer = bearerHeader.split(" ");
      // const bearerToken = bearer[1];
      // req.token = bearerToken;
      // console.log("user", bearerToken)
      // next();
    } catch (err) {
      console.error(err);
      res.status(401).send({ message: "Invalid Token" });
    }
  }
  return checker;
};

module.exports = tokenChecker;
