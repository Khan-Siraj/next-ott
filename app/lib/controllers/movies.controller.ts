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

export const fetch = async (req:NextRequest)=>{
  try {
    const movies = await Movies.find();
    return {data:movies,error:null}
  }
  catch(err)
  {
    return {data:null,error:err}
  }
}

export const fetchById = async (req:NextRequest,params:any)=>{
  const {id} = params;
  try {
    const movies = await Movies.findById(id);
    return {data:movies,error:null}
  }
  catch(err)
  {
    return {data:null,error:err}
  }
}

export const update = async (req:NextRequest,params:any)=>{
  const {id} = params;
  const data = await req.json();
  try {
    const updated = await Movies.findByIdAndUpdate(id,data,{new:true});
    return {data:updated,error:null}
  }
  catch(err)
  {
    return {data:null,error:err}
  }
}

export const trash = async (req:NextRequest,params:any)=>{
  const {id} = params;
  try {
    const deleted = await Movies.findByIdAndDelete(id);
    return {data:deleted,error:null}
  }
  catch(err)
  {
    return {data:null,error:err}
  }
}