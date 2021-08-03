// id,pwd, name, age, cardNumber, c_name, expired, cvc, role,
export default function userDataForm(addr){
    return(
      
        {
          userId: 'test',
          password: '',
          name: '',
          age: 0,
          creditCard: {
            cardNumber: '0000-0000-0000-0000',
            holderName: '',
            expired: '0624',
            CVC: '000',
          },
          role: 'user',
          address: `${addr}`,
          menubar: ['dddddd', 'eee', 'ff', 'g', 'h'], // 계정별 메뉴 데이터 제공
        }
      
    )
  
  }