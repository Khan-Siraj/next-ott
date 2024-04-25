import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {create} from "@lib/controllers/movies.controller"
export async function POST(req: NextRequest) {
    let { data, error } = await create(req);
    if (error)
        return NextResponse.json({ error }, { status: 424 })

    return NextResponse.json({ data }, { status: 200 })
}