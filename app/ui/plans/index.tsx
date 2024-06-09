"use client";
import { Card, Button } from "@/tailwind";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Plans({ data }: any) {
  const Plan = ({ item, index }: any) => {
    const {data:session} = useSession();
    const router = useRouter()
    const color = [
      {
        backgroundColor: "#21D4FD !important",
        backgroundImage:
          "linear-gradient(19deg, #21D4FD 0%, #B721FF 100%) !important",
        color: "white !important",
      },
      {
        backgroundColor: "#FA8BFF !important",
        backgroundImage:
          "linear-gradient(45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%) !important",
        color: "white !important",
      },
    ];

    const buyNow = ()=>{
      if(session)
      alert("Payment Service Not Available !")
      else
      router.push('/login')
      return false
    }
    const plan = (
      <>
        <Card className="shadow-lg border p-4 text-center relative">
          <h1 className="text-6xl font-bold mt-16 text-black">
            <i className="fa fa-rupee"></i>
            {item.amount}
          </h1>
          <p className="capitalize text-gray-500 text-xl">{item.emi}</p>
          <div
            style={{ borderBottom: "1px dashed #ccc" }}
            className="my-5"
          ></div>
          <pre
            style={{
              fontFamily: "sans-serif",
              lineHeight: "40px",
              color: "gray",
            }}
          >
            {item.desc}
          </pre>
          <Button
            onClick={buyNow}
            style={{
              backgroundColor: "#DC2626",
              color: "white",
            }}
            className="my-5 rounded-md"
          >
            BUY NOW
          </Button>
          <div
            style={{
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translate(-50%,0)",
              borderBottomLeftRadius: "20px",
              borderBottomRightRadius: "20px",
              padding: "10px 40px",
              backgroundColor: "#DC2626",
              color: "white",
            }}
            className="text-xl uppercase font-bold"
          >
            {item.title}
          </div>
        </Card>
      </>
    );
    return plan;
  };

  const design = (
    <>
      <div className="grid sm:grid-cols-3 gap-8 sm:gap-12 p-8 sm:p-16">
        {data &&
          data.map((item: any, index: number) => {
            return <Plan key={index} item={item} index={index} />;
          })}
      </div>
    </>
  );
  return design;
}
