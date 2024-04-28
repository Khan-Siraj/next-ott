import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
    cancel,
    fetchById
  } from "@/app/lib/controllers/media-convert.controller";

export async function GET(req:NextRequest,{ params }:any) {
  let {data,error}  = await fetchById(req,params)
  if(error)
  return NextResponse.json({error},{status:400})
  
  return NextResponse.json({data},{status:200})
}

export async function DELETE(req:NextRequest,{ params }:any) {
  let {data,error}  = await cancel(req,params)
  if(error)
  return NextResponse.json({error},{status:400})
  
  return NextResponse.json({data},{status:200})
}