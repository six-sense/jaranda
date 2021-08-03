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
