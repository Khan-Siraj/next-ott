import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {create, fetch} from "@lib/controllers/movies.controller"
export async function POST(req: NextRequest) {
    let { data, error } = await create(req);
    if (error)
        return NextResponse.json({ error }, { status: 424 })

    return NextResponse.json({ data }, { status: 200 })
}

export async function GET(req: NextRequest) {
    let { data, error }:any = await fetch(req);
    if (error)
        return NextResponse.json({ error }, { status: 424 })

    if(data.length > 0)
    {
        return NextResponse.json(data, { status: 200 })
    }else{
        return NextResponse.json({ message:'Data Not Found !' }, { status: 404 })
    }
}

