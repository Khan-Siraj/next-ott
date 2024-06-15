import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";
const secret:any = process.env.AUTH_SECRET
export function validateAdmin(request:NextRequest){
    return new Promise(async(resolve,reject)=>{
        // @ts-ignore
        let token = await getToken({req:request,secret})
        if(!token)
        return reject(false)

        if(token.role !== 'ADMIN')
        return reject(false)
        
        if(token.role === 'ADMIN')
        return resolve(true)

        return reject(false)
    })
}