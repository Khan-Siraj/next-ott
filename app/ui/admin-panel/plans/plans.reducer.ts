import {
  CREATE_PLAN_REQUEST,
  CREATE_PLAN_SUCCESS,
  CREATE_PLAN_FAILED
} from "./plans.state";

const Model = {
  createLoader: false,
  createSuccess: false,
  createError: false,
  createData: null
}

const PlansReducer = (state=Model,action:any)=>{
  switch(action.type)
  {
    case CREATE_PLAN_REQUEST : return {
      ...state,
      createLoader: true
    }

    case CREATE_PLAN_SUCCESS : return {
      ...state,
      createLoader: false,
      createData: action.payload,
      createSuccess: true
    }

    case CREATE_PLAN_FAILED : return {
      ...state,
      createLoader: false,
      createData: null,
      createError: true
    }

    default: return state;
  }
}

export default PlansReducer;
