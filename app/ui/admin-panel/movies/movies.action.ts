import {
  JOB_REQUEST,
  JOB_SUCCESS,
  JOB_FAILED,
  MOVIE_REQUEST,
  MOVIE_SUCCESS,
  MOVIE_FAILED
} from "./movies.state";
import axios from "axios";

export const createJob = (data:any)=>{
  return async (dispatch:any)=>{
    try {
      dispatch({
        type: JOB_REQUEST
      });
      const response = await axios({
        method: "post",
        url: "/api/media-convert",
        data: {
          key: data.video
        }
      });

      data["job_id"] = response.data.Job.Id;
      dispatch({
        type: JOB_SUCCESS,
        payload: {
          data,
          jobData: response.data
        }
      });
      // create movie
      dispatch(createMovie(data));
    }
    catch(err:any)
    {
      dispatch({
        type: JOB_FAILED,
        payload: err
      });
    }
  }
}

const createMovie = (data:any)=>{
  return async (dispatch:any)=>{
    try {
      dispatch({
        type: MOVIE_REQUEST
      });
      const response = await axios({
        method: "post",
        url: "/api/movies",
        data
      });
      dispatch({
        type: MOVIE_SUCCESS,
        payload: response.data
      });
    }
    catch(err:any)
    {
      dispatch({
        type: MOVIE_FAILED,
        payload: err.response
      });
    }
  }
}