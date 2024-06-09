"use client";
import {
    Button,
    Card,
    Form
  } from "@/tailwind";
  import {useRouter} from "next/navigation";
  import {useState,useEffect} from "react"
  import Style from "../login/login.module.css";
  import Link from "next/link";
  import signUp from "./register.action";
  import {useDispatch,useSelector} from "react-redux";
export default function Register(){
  const dispatch = useDispatch();
  const RegisterReducer = useSelector((response:any)=>response.RegisterReducer);
  const router = useRouter();
  const fields = [
    {
      component: "input",
      props: {
        name: "name",
        type: "text",
        label: "Fullname"
      }
    },
    {
      component: "email",
      props: {
        name: "email",
        type: "email",
        label: "Username"
      }
    },
    {
      component: "input",
      props: {
        name: "password",
        type: "password",
        label: "Password"
      }
    }
  ];

  useEffect(()=>{
    if(RegisterReducer.success)
    {
      router.push("/plans");
      return;
    }
  },[RegisterReducer]);

  const onSubmit = async (values:any)=>{
    // @ts-ignore
    dispatch(signUp(values));
  }

  const design = (
    <>
      <div className={`min-h-screen ${Style.main}`}>
        <div className={`min-h-screen flex items-center justify-center ${Style.opacity}`}>
          <div className="md:w-3/12">
            <Card>
              <div className="flex flex-col gap-4 p-3">
                {
                  RegisterReducer.error ? 
                  <Card>
                    <div  className="bg-red-500 text-white p-4">
                    <h1>Signup failed, Please try again later.</h1>  
                    </div>
                  </Card> : null
                }
                <h1 className="text-2xl font-bold text-black">Register</h1>
                <hr />
                <Form fields={fields} onSubmit={onSubmit} />
                <Link href="/login" className="text-black">Visit login page</Link>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
  return design;
}