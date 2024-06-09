import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "./types"
import {getToken} from 'next-auth/jwt'
const secret:any = process.env.AUTH_SECRET
export const withAuth: MiddlewareFactory = (next) => {
    return async (req: NextRequest, _next: NextFetchEvent) => {
        const pathname = req.nextUrl.pathname;
        if (["/((?!api|_next/static|_next/image|.*\\.png$).*)"]?.some((path) => pathname.startsWith(path))) {
            // @ts-ignore
            const token = await getToken({req,secret})
            if(!token){
              return NextResponse.redirect(new URL('/login',req.url))
            }
        }
      return next(req, _next);
    };
};
