export const addSeparatorBetweenNumber = (str, sliceNumber, separator) => {
  let result = '';
  let startIndex = 0;
  let endIndex = sliceNumber;
  const onlyNumber = getOnlyNumber(str);

  let count = 0;
  const condition = onlyNumber.length / sliceNumber;
  for (let i = count; i <= condition; i++) {
    result += onlyNumber.slice(startIndex, endIndex) + separator;
    startIndex += sliceNumber;
    endIndex += sliceNumber;
    count = i;
  }
  const separatorRegex = new RegExp(`${separator}*$`);
  return result.replace(separatorRegex, '');
};

export const getOnlyNumber = (target) => {
  const numberRegex = new RegExp(/\d*/g);
  return target.match(numberRegex).join('');
};

export const limitLength = (target, limitNumber) => {
  return String(target).slice(0, limitNumber);
};

export const validateExpiration = (expired) => {
  const expirationRegex = new RegExp(/(0[1-9]|1[012])[/]\d\d/);
  const thisYear = new Date().getFullYear().toString().slice(2);
  if (expirationRegex.test(expired)) {
    return expired.slice(3) >= thisYear ? true : false;
  }
  return false;
};
