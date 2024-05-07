"use client"
import {
    Button
  } from "@/tailwind";
  import {
    signIn
  } from "next-auth/react";
  
  import Style from "./login.module.css";
const Login = ()=>{
    return (
        <>
        <div className={`min-h-screen ${Style.main}`}>
          <div className={`min-h-screen flex items-center justify-center ${Style.opacity}`}>
            <div className="flex flex-col gap-4">
              <Button theme="warning" className="flex gap-3 items-center" onClick={()=>signIn('google')}>
                <i className="fa fa-google" style={{fontSize:'30px'}}></i>
                Signin with Google
              </Button>
  
              {/* <Button theme="secondary" className="flex gap-3 items-center">
                <i className="fa fa-facebook" style={{fontSize:'30px'}}></i>
                Signin with Facebook
              </Button>
  
              <Button theme="info" className="flex gap-3 items-center">
                <i className="fa fa-github" style={{fontSize:'30px'}}></i>
                Signin with Github
              </Button> */}
            </div>
          </div>
        </div>
      </>
    )
}

export default Login;