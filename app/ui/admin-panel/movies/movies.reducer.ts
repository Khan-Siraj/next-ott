import {
  JOB_REQUEST,
  JOB_SUCCESS,
  JOB_FAILED,
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_FAILED
} from "./movies.state";

const Model = {
  job_loading: false,
  movie_loading: false,
  job_success: false,
  movie_success: false,
  data: null,
  error: null
}

const MoviesReducer = (state=Model,action:any)=>{
  switch(action.type)
  {
    case JOB_REQUEST : return {
      ...state,
      job_loading: true
    }

    case JOB_SUCCESS : return {
      ...state,
      job_loading: false,
      job_success: true,
      data: action.payload
    }

    case JOB_FAILED : return {
      ...state,
      job_loading: false,
      job_success: false,
      error: action.payload
    }

    case MOVIE_REQUEST : return {
      ...state,
      movie_loading: true
    }

    case MOVIE_SUCCESS : return {
      ...state,
      movie_loading: false,
      movie_success: true,
      data: action.payload
    }

    case MOVIE_FAILED : return {
      ...state,
      movie_loading: false,
      movie_success: false,
      error: action.payload
    }

    default : return state;
  }
}

export default MoviesReducer;
