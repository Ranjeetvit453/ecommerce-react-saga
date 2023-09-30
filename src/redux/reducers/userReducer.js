import { USER_LOGIN_ERROR,USER_LOGIN_REQUEST
,USER_LOGIN_SUCCESS,USER_REGISTER_ERROR,USER_REGISTER_SUCCESS,USER_REGISTER_REQUEST ,USER_CLEAR_STATE} from "../type/userType";



const initialState = {
    loader:false,
    status:"",
    message:"",
    data:[],
    error:""
}


const userReducer = (state=initialState,action)=>{
      switch(action.type){

        case USER_REGISTER_SUCCESS:
         
          return {
            ...state,
            loader:false,
            error:"",
            data:action?.userData?.data,
            status:action?.userData?.status,
            message:action?.userData?.message
          }
          case USER_REGISTER_REQUEST:
          return {
            ...state,
            loader:true,
            error:"",
            status:"",
            message:""
          }
        case USER_CLEAR_STATE:
          return {
            ...state,
            loader:false,
            error:"",
            status:"",
            message:""
          }
        case USER_LOGIN_REQUEST:
         return {
            ...state,
            loader:true,
            error:"",
            status:"",
            message:""
         }
        case USER_REGISTER_ERROR:
          console.log("USER_REGISTER_ERROR user reducer",action.userRes)
          return {
            ...state,
            loader:false,
            error:action.userRes,
            status:"",
            message:""
          }
        case USER_LOGIN_SUCCESS:
          console.log(" USER_LOGIN_SUCCESS reducer",action.loginData)
        return {
            ...state,
            loader:false,
            error:"",
            data:action.loginData,
            status:action.loginData.status,
            message:action.loginData.message
        }
      case USER_LOGIN_ERROR:
        return {
            ...state,
            loader:false,
            error:action.err,
        }
      default :
      return {
        ...state
      }
      }
}


export default userReducer