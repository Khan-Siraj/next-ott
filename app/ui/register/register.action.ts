import {
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILED
  } from "./register.state";
  import axios from "axios";
  
  const signUp = (data:any)=>{
    return async (dispatch:any)=>{
      dispatch({
        type: SIGNUP_REQUEST
      })
  
      try {
        const response = await axios({
          method: "post",
          url: "/api/user",
          data
        });
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: response.data
        })
      }
      catch(err:any)
      {
        dispatch({
          type: SIGNUP_FAILED,
          payload: err.response.data
        })
      }
    }
  }
  
  export default signUp;
  