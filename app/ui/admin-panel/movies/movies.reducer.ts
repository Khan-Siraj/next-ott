import {
    MOVIE_REQUEST,
    MOVIE_SUCCESS,
    MOVIE_FAILED
  } from "./movies.state";
  
  const Model = {
    loading: false,
    success: false,
    data: null,
    error: null
  }
  
  const MoviesReducer = (state=Model,action:any)=>{
    switch(action.type)
    {
      case MOVIE_REQUEST : return {
        ...state,
        loading: true
      }
  
      case MOVIE_SUCCESS : return {
        ...state,
        loading: false,
        success: true,
        data: action.payload
      }
  
      case MOVIE_FAILED : return {
        ...state,
        loading: false,
        success: false,
        error: action.payload
      }
  
      default : return state;
    }
  }
  
  export default MoviesReducer;
  