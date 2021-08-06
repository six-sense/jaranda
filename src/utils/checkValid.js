function checkId(id) {
  const idValid = /^[a-zA-Z0-9_-]{0,26}$/;
  return idValid.test(id);
}

function checkPassword(password) {
  const pwValid = /^[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{0,16}$/;
  return pwValid.test(password);
}

function checkPasswordSignUp(password) {
  const pwValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  return password.match(pwValid);
}

function checkIdSignUp(id) {
  const idValid = /^[a-zA-Z0-9_-]{4,26}$/;
  return id.match(idValid);
}

function checkEmail(email) {
  const emailValid =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return email.match(emailValid);
}

export const Validation = {
  checkIdSignUp,
  checkPassword,
  checkId,
  checkEmail,
  checkPasswordSignUp,
};
