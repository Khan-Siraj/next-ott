import NextAuth from "next-auth"
import Google from "next-auth/providers/google"
import Credentials from 'next-auth/providers/credentials';
import axios from "axios";
import { authConfig } from "./auth.config";
export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: {label: "Username", type: "email", name: "email"},
        password: {label: "Password", type: "password", name: "password"}
      },
      async authorize(credentials:any) {
        try {
          const response = await axios({
            method:'get',
            url:process.env.NEXT_PUBLIC_ENDPOINT+"/api/user",
            headers:credentials
          })
          return response.data.user;
        }
        catch(err)
        {
          return null;
        }
      }
    }),
    Google
  ],
  callbacks:{
    jwt:({token,user}:any)=>{
      if(user){
        token['role'] = user.role 
      }
      return token
    },
    session:({token,session}:any)=>{
      if(token){
        session.user['role'] = token.role
      }
      return session
    }
  }
})