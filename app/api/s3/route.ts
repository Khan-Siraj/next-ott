import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
  fetch,
  create
} from "@/app/lib/controllers/s3.controller";

export async function GET(req:NextRequest) {
  let {data,error}  = await fetch(req)
  if(error)
  return NextResponse.json({error},{status:400})
  
  return NextResponse.json({data},{status:200})
}
export async function POST(req:NextRequest) {
  let res =  create(req);
  return NextResponse.json({data:res},{status:200})
}

