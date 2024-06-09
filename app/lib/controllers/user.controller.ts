import "@lib/modules/db.module";
import User from "@lib/schema/user.schema";
import {decrypt} from "@lib/modules/bcrypt.module";
import type { NextRequest } from 'next/server';
import { verifyToken } from "@lib/utils/authToken";
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
  try {
    await adminMiddleware(req)
    data['role'] = 'ADMIN'
  } catch (error) {
    data['role'] = 'USER'
  }
  const user = new User(data);
  const newUser = await user.save();
  const newData = newUser.toObject();
  delete newData.password;
  return {'newData':true}
}


const adminMiddleware = (req:NextRequest)=>{
  return new Promise(async (resolve,reject)=>{
    const token:any = req.cookies.get('admin')
    if(!token) return reject(false)
    try {
      await verifyToken(token.value)
      resolve(true)
    } catch (error) {
      return reject(false) 
    }
  })
}