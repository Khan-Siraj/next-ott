import "../module/db.module";
import User from "@lib/schema/login.schema";
import type { NextRequest } from 'next/server';
export const fetch = (req:NextRequest)=>{
  return {
    message: "Get request !"
  }
}

export const fetchById = (req:NextRequest)=>{
  return {
    message: "Get request By Id !"
  }
}

export const create = async (req:NextRequest)=>{
  const data = await req.json();
  const tmp = new User(data);
  try {
    const userData = await tmp.save();
    return {data:{
      message: "success",
      data: userData
    },error:null}
  }
  catch(err)
  {
    return {
      data:null,
      error:{
            message: "Unable to store data",
            error:err
          }
      }
  }
}

export const update = (req:NextRequest)=>{
  const data = req.body;
  return {
    message: "Put request !",
    data
  };
}

export const trash = (req:NextRequest)=>{
  return {
    message: "Delete request !"
  };
}
