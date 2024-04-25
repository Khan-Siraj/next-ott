import "@lib/modules/db.module";
import Movies from "@lib/schema/movies.schema";
import { NextRequest } from "next/server";

export const create = async (req:NextRequest)=>{
  try {
    const data = await req.json();
    const newMovie = new Movies(data);
    const response = await newMovie.save();
    return {data:response,error:null}
  }
  catch(err)
  {
    return {data:null,error:err}
  }
}
