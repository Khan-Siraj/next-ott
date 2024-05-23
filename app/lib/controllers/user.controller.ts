import "@lib/modules/db.module";
import User from "@lib/schema/user.schema";
import {decrypt} from "@lib/modules/bcrypt.module";
import type { NextRequest } from 'next/server';
export const login = async (req:NextRequest)=>{
  const email = req.headers.get("email");
  const password = req.headers.get("password");
  const userData = await User.findOne({email});
  if(userData)
  {
    const login = await decrypt(password,userData.password);
    if(login)
    {
      const loginData = userData.toObject();
      delete loginData.password;
      return {data:loginData,error:null}
    }
    else {
      return {
        data:null,
        error:"Login failed"
      }
    }
  }
  else {
    return {
        data:null,
        error:"Login failed"
    }
  }
}

export const signup = async (req:NextRequest)=>{
  const data = await req.json();
  const user = new User(data);
  const newUser = await user.save();
  const newData = newUser.toObject();
  delete newData.password;
  return newData
}
