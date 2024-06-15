import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "./types"
import {getToken} from 'next-auth/jwt';
const secret:any = process.env.AUTH_SECRET
export const withAdmin: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
      const pathname = request.nextUrl.pathname;
      if (["/admin-panel"]?.some((path) => pathname.startsWith(path))) {
        const server = NextResponse;
        // @ts-ignore
        const token = await getToken({req:request,secret})
        if(!token){
          return server.redirect(new URL('/login',request.url))
        }
        if(token.role !== 'ADMIN'){
          return server.redirect(new URL('/login',request.url))
        }
      }
      return next(request, _next);
    };
};
