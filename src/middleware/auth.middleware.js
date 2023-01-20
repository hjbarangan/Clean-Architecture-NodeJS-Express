const tokenChecker = ({ jwt, SECRET_KEY }) => {
  function checker(req, res, next) {
    const token = req.header("Authorization");

    if (!token) {
      return res
        .status(403)
        .json({ message: "A token is required for authentication." });
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded.user;
      next();

      // const bearer = bearerHeader.split(" ");
      // const bearerToken = bearer[1];
      // req.token = bearerToken;
      // next();
    } catch (err) {
      console.error(err);
      res.status(401).send({ message: "Invalid Token" });
    }
  }
  return checker;
};

module.exports = tokenChecker;
