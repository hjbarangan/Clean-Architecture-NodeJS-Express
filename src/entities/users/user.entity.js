const makeUserEntity = ({}) => {
  function containsSpecialChars(string) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(string);
  }

  function validEmail(email) {
    const emailFormat = /\S+@\S+\.\S+/;
    return emailFormat.test(email);
  }

  function containsNumbers(string) {
    const numbers = /[0-9]/;
    return numbers.test(string);
  }

  return function createUser(user) {
    const { email, password, firstname, lastname } = user;

    if (!validEmail(email)) {
      throw new Error("Email should be a valid email!");
    }

    if (!email) {
      throw new Error("User should have an email!");
    }

    if (!password) {
      throw new Error("User must have password!");
    }

    if (password.length < 8) {
      throw new Error("Password length must be atleast 8 characters!");
    }

    if (!firstname) {
      throw new Error("User must have a firstname!");
    }

    if (!lastname) {
      throw new Error("User must have a lastname!");
    }

    if (containsSpecialChars(firstname) || containsSpecialChars(lastname)) {
      throw new Error("Name should not contain any special character");
    }

    if (containsNumbers(firstname) || containsNumbers(lastname)) {
      throw new Error("Name should not contain numbers!");
    }

    return Object.freeze({
      email,
      password,
      firstname,
      lastname
    });
  };
};

module.exports = makeUserEntity;
