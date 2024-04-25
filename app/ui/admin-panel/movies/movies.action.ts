import {
    MOVIE_REQUEST,
    MOVIE_SUCCESS,
    MOVIE_FAILED
  } from "./movies.state";
  import axios from "axios";
  
  export const createStreaming = (data:any)=>{
    return async (dispatch:any)=>{
      try {
        dispatch({
          type: MOVIE_REQUEST
        });
        const response = await axios({
          method: "post",
          url: "/api/media-convert",
          data: {
            key: data.video
          }
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
  