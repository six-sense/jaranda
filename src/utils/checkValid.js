// 아이디 유효성 검사
function checkId(id) {
  const idValid = /^[a-zA-Z0-9_-]{0,26}$/;
  return id.match(idValid);
}

// 비밀번호 유효성 검사
function checkPassword(password) {
  const pwValid = /^[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{0,16}$/;
  return password.match(pwValid);
}

// 비밀번호 유효성 검사 (8자리 이상/ 숫자,알파벳,특수문자 필수 포함)
function checkPasswordSignUp(password) {
  const pwValid = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
  return password.match(pwValid);
}

// 아이디 유효성 검사 (5자리 이상)
function checkIdSignUp(id) {
  const idValid = /^[a-zA-Z0-9_-]{4,26}$/;
  return id.match(idValid);
}

// 이메일 유효성 검사
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
