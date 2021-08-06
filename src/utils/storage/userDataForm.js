export default function userDataForm(
  userId,
  pw,
  name,
  age,
  cardNumber,
  holderName,
  expired,
  cvc,
  role,
  addr,
  menubar,
) {
  return {
    userId: `${userId}`,
    password: `${pw}`,
    name: `${name}`,
    age: `${age}`,
    creditCard: {
      cardNumber: `${cardNumber}`,
      holderName: `${holderName}`,
      expired: `${expired}`,
      CVC: `${cvc}`,
    },
    role: `${role}`,
    address: `${addr}`,
    menubar: menubar,
  };
}
