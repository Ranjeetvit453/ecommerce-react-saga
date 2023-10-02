import { USER_REGISTER_REQUEST,USER_CLEAR_STATE, USER_LOGIN_REQUEST, USER_LIST_REQUEST } from "../type/userType";



export const userRegisterRequest = (data)=>{
    
    return {
        type:USER_REGISTER_REQUEST,
        payload:data
    }
}

export const userClearState = ()=>{
    return {
        type:USER_CLEAR_STATE,
    }
}

export const userLoginRequest = (data)=>{
    return {
        type:USER_LOGIN_REQUEST,
        payload:data

    }
}

export const userListActionRequest = (data)=>{
  return {
    type:USER_LIST_REQUEST,
    payload:data
  }
}