import VideoProcessing from "@lib/modules/video-processing.module";
import AWS from "aws-sdk";
import { NextRequest } from "next/server";
const media = new AWS.MediaConvert({
  region: 'ap-south-1',
  apiVersion: '2017-08-29',
  endpoint: 'https://xnbzilj6c.mediaconvert.ap-south-1.amazonaws.com',
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY
});

export const fetch = async (req:NextRequest)=>{
  const query = req.nextUrl.searchParams
  const token = query.get("token");
  let NextToken = token ? token.split(" ").join("+") : "";
  const params = {
    NextToken
  }
  try {
    const jobs = await media.listJobs(params).promise();
    return {data:jobs,error:null}
  }
  catch(err)
  {
    return {data:null,error:err}
  }
}

export const create = async (req:NextRequest)=>{
  try {
    let body:any = await req.json()
    const params = VideoProcessing(body.key);
    // @ts-ignore
    const job = await media.createJob(params).promise();
    return {data:job,error:null}
  }
  catch(err)
  {
    console.log(err)
    return {data:null,error:err}
  }
}

// to find media convert endpoint OTT-CMAF
/* AWS.config.update({ 
  region: "ap-south-1",
  accessKeyId: process.env.NEXT_PUBLIC_ACCESS_KEY_ID,
  secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY
 });
const media = new AWS.MediaConvert({ apiVersion: "2017-08-29" })
export const fetch = async (req:NextRequest)=>{
  const params = {}
  try {
    const {Endpoints} = await media.describeEndpoints(params).promise();
    return {data:Endpoints,error:null}
  }
  catch(err)
  {
    return {data:null,error:err}
  }
} */

export const fetchById = async (req:NextRequest,params:any)=>{
  const {id} = params;
  try {
    const params = {
      Id: id
    }
    const job = await media.getJob(params).promise();
    return {data:job,error:null}
  }
  catch(err)
  {
    return {data:null,error:err}
  }
}

export const cancel = async (req:NextRequest,params:any)=>{
  const {id} = params;
  try {
    const params = {
      Id: id
    }
    const job = await media.cancelJob(params).promise();
    return {data:job,error:null}
  }
  catch(err)
  {
    return {data:null,error:err}
  }
}
