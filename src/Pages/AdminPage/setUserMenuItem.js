export function userDataForm (address, age, cvc, cardNumber, expired, holderName, menubar, name,role, userId){
    return(
        {
            "address": `${address}`,
            "age": `${age}`,
            "creditCard": {
                "CVC": `${cvc}`,
                "cardNumber": `${cardNumber}`,
                "expired": `${expired}`,
                "holderName": `${holderName}`
            },
            "menubar": `${menubar}`,
            "name": `${name}`,
            "role": `${role}`,
            "userId": `${userId}`
    } 
    )
}

