<<<<<<< HEAD
// 이메일 유효성 검사
function checkId(e) {
  const idValid =
    /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*[a-zA-Z]{4,26}$/;
  return idValid.test(e);
}

//비밀번호 유효성 검사
function checkPassword(e) {
  const pwValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,13}$/;
  return pwValid.test(e);
}

export const Validation = { checkPassword, checkId };
=======
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

// 이메일 유효성 검사
function checkEmail(email) {
  const emailValid =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return email.match(emailValid);
}

export const Validation = { checkPassword, checkId, checkEmail };
>>>>>>> a9f624d7a8b9a5c9f722a5815b309b00cd66e83f
