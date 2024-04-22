import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
    update,
    trash,
    fetchById
  } from "@/app/lib/controllers/s3.controller";

export async function GET(req:NextRequest,{ params }:any) {
  let {data,error}  = await fetchById(req,params)
  if(error)
  return NextResponse.json({error},{status:400})
  
  return NextResponse.json({data},{status:200})
}

export async function PUT(req:NextRequest,{ params }:any) {
    let res  = update(req)
    return NextResponse.json({data:res},{status:200})
}

export async function DELETE(req:NextRequest,{ params }:any) {
  let {data,error}  = await trash(req,params)
  if(error)
  return NextResponse.json({error},{status:400})
  
  return NextResponse.json({data},{status:200})
}