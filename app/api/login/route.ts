import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  fetch,
  create
} from "@lib/controller/login.controller";

export async function GET(req:NextRequest) {
  let res  = fetch(req)
  return NextResponse.json({data:res},{status:200})
}
export async function POST(req:NextRequest) {
  let {data,error}  = await create(req);
  
  if(error)
  return  NextResponse.json({error},{status:424})

  return NextResponse.json({data},{status:200})
}

