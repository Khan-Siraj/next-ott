import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
export function middleware(request: NextRequest){
    let token = request.cookies.get('token')
    if(token?.value == '1234')
    return NextResponse.next()
    else
    return NextResponse.json({message:'Unauthorized !'},{status:401})
}

export const config = {
    matcher: ['/api/:path*']
};