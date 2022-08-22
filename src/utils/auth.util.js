const jwtGenerator = ({ jwt, SECRET_KEY }) => {
  return function generate(data) {
    const { user_id } = data;
    const payload = {
      user: user_id,
    };
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "24hr" });
  };
};

module.exports = jwtGenerator;
