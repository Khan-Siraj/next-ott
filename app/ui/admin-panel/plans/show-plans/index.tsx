import useSWR from "swr";
import axios from "axios";
import {
  Card,
  Button,
  IconButton
} from "@/tailwind";

const index = ()=>{
  const getData = async (url:string)=>{
    try {
        const response = await axios.get(url)
        return response.data;
    }
    catch(err:any)
    {
      return err.response.data;
    }
  }
  const {data,error} = useSWR("/api/plan",getData,{refreshInterval: 5000});
  const trash = async (id:string)=>{
    await axios({
      method: "delete",
      url: "/api/plan/"+id
    })
  }

  const ShowPlans = ({item}:any)=>{
    const plan = (
      <>
        <Card>
          <div className="p-3">
          <h1 className="text-2xl font-bold text-black">{item.title}</h1>
          <p className="text-gray-400">
            {item.desc}
          </p>
          <div className="flex flex-col my-1">
            <h1 className="text-6xl font-bold text-black">{item.amount}</h1>
            <p className="text-slate-900">
              {item.emi}/Emi
            </p>
          </div>

          <div className="flex gap-3 mt-3">
            <IconButton theme="secondary">edit</IconButton>
            {/* @ts-ignore */}
            <IconButton theme="warning" onClick={()=>trash(item._id)}>delete</IconButton>
          </div>
          </div>
        </Card>
      </>
    );
    return plan;
  }

  const design = (
    <>
      <div className="grid sm:grid-cols-3 gap-4">
        {
          data instanceof Array ? data.map((item:any,index:number)=>{
            return <ShowPlans key={index} item={item} />
          }):null
        }
      </div>
    </>
  );
  return design;
}

export default index;
