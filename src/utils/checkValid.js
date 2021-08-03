// 이메일 유효성 검사
function checkId(id) {
  const idValid = /^[a-zA-Z0-9_-]{0,26}$/;
  return id.match(idValid);
}

//비밀번호 유효성 검사
function checkPassword(password) {
  const pwValid = /^[a-zA-Z0-9~!@#$%^&*()_+|<>?:{}]{0,16}$/;
  return password.match(pwValid);
}

export const Validation = { checkPassword, checkId };
