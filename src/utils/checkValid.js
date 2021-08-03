//비밀번호 유효성 검사
function checkPassword(e) {
  var pwValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d!@#$%^&*+=-]{8,16}$/;

  pwValid.test(e);
}

// 이메일 유효성 검사
function checkId(e) {
  var idValid =
    /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*[a-zA-Z]{4,26}$/;

  idValid.test(e);
}

export const Validation = { checkPassword, checkId };
