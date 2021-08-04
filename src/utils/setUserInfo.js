import { LOCAL_STORAGE } from "./constants"

export default function setUserData(data){
    if(LOCAL_STORAGE.get('userData')===null){
        LOCAL_STORAGE.set('userData',[data])
    }
    else{
        const userInfos = LOCAL_STORAGE.get("userData")
        userInfos.push(data)
        LOCAL_STORAGE.set("userData",userInfos)
    }
    return true;
}