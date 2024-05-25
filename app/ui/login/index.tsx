"use client";
import { Button, Card, Form } from "@/tailwind";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Style from "./login.module.css";
const Login = ({csrf}:any) => {
  const [error, setError] = useState(false);
  const router = useRouter();
  const fields = [
    {
      component: "input",
      props: {
        name: "csrfToken",
        type: "hidden",
        value:csrf
      },
    },
    {
      component: "email",
      props: {
        name: "email",
        type: "email",
        label: "Username",
      },
    },
    {
      component: "input",
      props: {
        name: "password",
        type: "password",
        label: "Password"
      },
    },
  ];

  const onSubmit = async (values: any) => {
    const {error}: any = await signIn("credentials", {
      ...values,
      redirect: false,
    });
    if (!error) {
      router.replace("/");
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <>
      <div className={`min-h-screen ${Style.main}`}>
        <div
          className={`min-h-screen flex items-center justify-center ${Style.opacity}`}
        >
          <div className="w-3/12">
            <Card className="p-4">
              {error ? (
                <Card>
                  <div  className="bg-red-500 text-white p-4">
                  <h1>Login failed, Please enter correct information</h1>  
                  </div>
                </Card>
              ) : null}
              <Form fields={fields} onSubmit={onSubmit} />
              <hr className="border border-gray-500 my-3" />
              <div className="flex flex-col gap-4">
                <Button
                  theme="warning"
                  className="flex gap-3 items-center"
                  onClick={() => signIn("google")}
                >
                  <i className="fa fa-google" style={{ fontSize: "30px" }}></i>
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
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
