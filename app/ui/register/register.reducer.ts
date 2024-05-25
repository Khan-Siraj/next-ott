import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED
  } from "./register.state";
  
  const Model = {
    loading: false,
    success: false,
    data: null,
    error: false,
  }
  
  const RegisterReducer = (state=Model,action:any)=>{
    switch(action.type)
    {
      case SIGNUP_REQUEST : return {
        ...state,
        loading: true
      }
  
      case SIGNUP_SUCCESS : return {
        ...state,
        loading: false,
        success: true,
        data: action.payload
      }
  
      case SIGNUP_FAILED : return {
        ...state,
        loading: false,
        success: false,
        data: null,
        error: true
      }
  
      default: return state;
    }
  }
  
  export default RegisterReducer;
  