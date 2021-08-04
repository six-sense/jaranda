// id,pwd, name, age, cardNumber, c_name, expired, cvc, role,
export default function userDataForm(userId, pw, name, age, role, addr){
    return(
      
        {
          userId: `${userId}`,
          password: `${pw}`,
          name: `${name}`,
          age: `${age}`,
          creditCard: {
            cardNumber: '0000-0000-0000-0000',
            holderName: '',
            expired: '0624',
            CVC: '000',
          },
          role: `${role}`,
          address: `${addr}`,
          menubar: ['dddddd', 'eee', 'ff', 'g', 'h'], // 계정별 메뉴 데이터 제공
        }
      
    )
  
  }