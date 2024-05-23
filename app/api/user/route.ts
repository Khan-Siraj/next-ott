import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  login,
  signup
} from "@/app/lib/controllers/user.controller";

export async function GET(req:NextRequest) {
  let {data,error}  = await login(req)
  if(error)
  return NextResponse.json({message:error},{status:400})
  
  return NextResponse.json({user:data},{status:200})
}
export async function POST(req:NextRequest) {
  let res =  await signup(req);
  return NextResponse.json(res,{status:200})
}
