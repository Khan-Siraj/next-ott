import {
  CREATE_PLAN_REQUEST,
  CREATE_PLAN_SUCCESS,
  CREATE_PLAN_FAILED
} from "./plans.state";

import axios from "axios";

export const create = (data:any,resetForm:any)=>{
  return async (dispatch:any)=>{
    try {
      dispatch({
        type: CREATE_PLAN_REQUEST,
      });

      const response = await axios({
        method: "post",
        url: "/api/plan",
        data
      });

      dispatch({
        type: CREATE_PLAN_SUCCESS,
        payload: response.data
      });
      resetForm();
    }
    catch(err:any)
    {
      dispatch({
        type: CREATE_PLAN_FAILED,
        payload: err.response.data
      });
      resetForm();
    }
  }
}
