import {
    fetch,
    create
} from "@lib/controllers/media-convert.controller";
import { NextRequest, NextResponse } from "next/server";
import { validateAdmin } from '@/middlewares/secureAdminApi';
export async function GET(req: NextRequest) {
    try {
        await validateAdmin(req)
    } catch (error) {
        return NextResponse.json({ error:'Unauthorized Access !' }, { status: 401 })
    }
    let { data, error } = await fetch(req)
    if (error)
        return NextResponse.json({ error }, { status: 424 })

    return NextResponse.json({jobs:data }, { status: 200 })
}
export async function POST(req: NextRequest) {
    try {
        await validateAdmin(req)
    } catch (error) {
        return NextResponse.json({ error:'Unauthorized Access !' }, { status: 401 })
    }
    let { data, error } = await create(req);
    if (error)
        return NextResponse.json({ error }, { status: 424 })

    return NextResponse.json({Job: data?.Job }, { status: 200 })
}