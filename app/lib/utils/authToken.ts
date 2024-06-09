import { jwtVerify, SignJWT } from "jose";

export const getSecretKey = ()=>{
    const secret = process.env.NEXT_PUBLIC_ADMIN_SECRET
    if(!secret || secret.length === 0)
    throw new Error("The enviroment veriable NEXT_PUBLIC_ADMIN_SECRET not set.")

    return secret
}

export const verifyToken = async (token:string)=>{
    try {
        const verified = await jwtVerify(token!,new TextEncoder().encode(getSecretKey()))
        return verified.payload
    } catch (error) {
        throw new Error("Your token has expired.")
    }
}