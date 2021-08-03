
//비밀번호 유효성 검사
function checkPassword(e) {
  var pwValid = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/;
  pwValid.test(e.target.value);
}

// 이메일 유효성 검사

function checkId(e) {
  var idValid =
    /^[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*[0-9a-zA-Z]([-_]?[0-9a-zA-Z])*[a-zA-Z]{6,14}$/;

  idValid.test(e.target.value);
}

export const Validation = { checkPassword, checkId };

