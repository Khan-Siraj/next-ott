import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { MiddlewareFactory } from "./types"
import url from "url";
import { verifyToken } from "@lib/utils/authToken";
export const withRegister: MiddlewareFactory = (next) => {
    return async (request: NextRequest, _next: NextFetchEvent) => {
      const pathname = request.nextUrl.pathname;
      if (["/register"]?.some((path) => pathname.startsWith(path))) {
        const server = NextResponse.next();
        const token:any = url.parse(request.url, true).query.token;
        if (!token) {
          server.cookies.delete('admin');
          return server;
        }else{
          try {
            await verifyToken(token);
            server.cookies.set('admin', token,{httpOnly:true,sameSite:'lax',path:'/'})
            return server
          } catch (err) {
            console.error("Error verifying token:", err);
            server.cookies.delete('admin');
            return server
          }
        }
      }
      return next(request, _next);
    };
};