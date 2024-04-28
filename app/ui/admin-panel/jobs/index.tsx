"use client"
import useSWR from 'swr';
import axios from "axios";
import {
  Button
} from "@/tailwind";
import {useState} from "react";
import moment from "moment";
const Index = ()=>{
  const [deleting,setDeleting] = useState(false);
  const [token,setToken] = useState('');
  const columns = ["Job id","Filename","Created at","Status","Percentage","Action"];
  const getData = async (url:string)=>{
    try {
      const response = await axios({
        method: "get",
        url: url
      });
      return response.data.jobs;
    }
    catch(err:any)
    {
      return err.response.data;
    }
  }
  const {data,error} = useSWR("/api/media-convert?token="+token,getData,{refreshInterval: 5000});

  const Loader = ()=>{
    return <h1 className="text-white text-md mt-4">Loading...</h1>
  }

  const cancel = async (id:string)=>{
    setDeleting(true);
    await axios({
      method: "delete",
      url: "/api/media-convert/"+id
    });
  }

  const Tr = ({item,index}:any)=>{
    let input = item.Settings.Inputs[0].FileInput.split("/");
    const tr = (
      <>
        <tr className={`bg-gray-200 ${index % 2 === 0 ? 'text-black' : 'text-white'}`}>
          <td style={{verticalAlign: "middle"}}>{item.Id}</td>
          <td style={{verticalAlign: "middle"}}>{input[input.length-1]}</td>
          <td style={{verticalAlign: "middle"}}>{moment(item.CreatedAt).format('MMMM Do YYYY, h:mm:ss a')}</td>
          <td style={{verticalAlign: "middle"}}>{item.Status}</td>
          <td style={{verticalAlign: "middle"}}>{item.Status === "PROGRESSING" ? (item.JobPercentComplete ? item.JobPercentComplete : 0)+"%" : item.Status}</td>
          <td align="right">
            {
              item.Status === "PROGRESSING" ?
              <div className="flex">
                {
                  deleting ? <i className="fa fa-spinner fa-spin"></i> : <Button theme="error" onClick={()=>cancel(item.Id)}>Cancel</Button>
                }
              </div> : null
            }
          </td>
        </tr>
      </>
    );
    return tr;
  }

  const design = (
    <>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-lg text-white">All Jobs</h1>
        <Button disabled={data && data.NextToken ? false : true} theme={data && data.NextToken ? 'error' : 'disabled'} onClick={()=>setToken(data.NextToken)}>Next</Button>
      </div>
      <div className="table-responsive">
        <table className="table table-striped text-white">
          <thead>
            <tr>
              {
                columns.map((key,index)=>{
                  return <th className="text-left" key={index}>{key}</th>;
                })
              }
            </tr>
          </thead>
          <tbody>
            {
              data && data.Jobs.map((item:any,index:any)=>{
                return <Tr key={index} item={item} index={index+1} />
              })
            }
          </tbody>
        </table>
      </div>
      {
        data || error ? null : <Loader />
      }
    </>
  );
  return design;
}
  
  export default Index;