import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {
    fetchById,
    trash,
    update
} from "@lib/controllers/plan.controller"

export async function GET(req:NextRequest,{ params }:any) {
    let {data,error}  = await fetchById(req,params)
    if(error)
    return NextResponse.json(error,{status:400})
    
    if(data){
        return NextResponse.json(data,{status:200})
    }else{
        return NextResponse.json({message:'Data Not Found'},{status:404})
    }
  }
  
export async function DELETE(req:NextRequest,{ params }:any) {
    let {data,error}  = await trash(req,params)
    if(error)
    return NextResponse.json(error,{status:400})

    return NextResponse.json(data,{status:200})
}

export async function PUT(req:NextRequest,{ params }:any) {
    let {data,error}  = await update(req,params)
    if(error)
    return NextResponse.json(error,{status:400})

    return NextResponse.json(data,{status:200})
}