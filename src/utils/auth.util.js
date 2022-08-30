const jwtGenerator = ({ jwt, SECRET_KEY }) => {
  return function generate(data) {
    const { user_id, email } = data;
    const payload = {
      user: user_id,
      email: email
    };
    return jwt.sign(payload, SECRET_KEY, { expiresIn: "24hr" });
  };
};

module.exports = jwtGenerator;
