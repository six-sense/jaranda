// id,pwd, name, age, cardNumber, c_name, expired, cvc, role,
export default function userDataForm(userId, pw, name, age, cardNumber, holderName, expired,cvc, role, addr){
    return(
      
        {
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
          menubar: ['dddddd', 'eee', 'ff', 'g', 'h'], // 계정별 메뉴 데이터 제공
        }
      
    )
  
  }