const makeUserEntity = ({}) => {
  function containsSpecialChars(string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(string);
  }

  return function createUser(user) {
    const { email, password, firstname, lastname } = user;

    // const emailFormat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    // const passwordValidator = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;

    // if (!email.match(emailFormat)) {
    //   throw new Error("Email should be a valid email!");
    // }

    if (!email) {
      throw new Error("User must have email!");
    }

    if (!password) {
      throw new Error("User must have password!");
    }

    if (password.length < 7) {
      throw new Error("Password length must be atleast 7 characters!");
    }

    // if (!password.match(passwordValidator)){
    //   throw new Error("Password must contain atleast one numeric digit and a special character!")
    // }

    if (!firstname) {
      throw new Error("User must have firstname!");
    }

    if (!lastname) {
      throw new Error("User must have lastname!");
    }

    if (containsSpecialChars(firstname) || containsSpecialChars(lastname)) {
      throw new Error("Name should not contain any special character");
    }

    return Object.freeze({
      email,
      password,
      firstname,
      lastname,
    });
  };
};

module.exports = makeUserEntity;
