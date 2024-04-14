import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import {
    update,
    trash,
    fetchById
  } from "@lib/controller/login.controller";

export async function GET(req:NextRequest,{ params }:any) {
  const data = params;
  let res  = fetchById(req)
  return NextResponse.json({
    data: res,
    loginId:data['login-id']
  },{status:200})
}

export async function PUT(req:NextRequest,{ params }:any) {
    let res  = update(req)
    return NextResponse.json({data:res},{status:200})
}

export async function DELETE(req:NextRequest,{ params }:any) {
    let res  = trash(req)
    return NextResponse.json({data:res},{status:200})
}