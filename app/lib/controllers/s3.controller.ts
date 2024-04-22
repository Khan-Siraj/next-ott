'use server';
import AWS from "@lib/modules/aws.module"
import type { NextRequest } from 'next/server';
import { unstable_noStore as noStore } from 'next/cache';
// { apiVersion: "2006-03-01" }
const s3 = new AWS.S3({
    endpoint: 's3-ap-south-1.amazonaws.com',
    signatureVersion: 'v4',
    region: 'ap-south-1'
});
const options:any = {
  Bucket:'khanott'
}

// Delimiter:'/'

export const fetch = async (req:NextRequest)=>{
  noStore();
  try {
    const query = req.nextUrl.searchParams;
    options["MaxKeys"] = query.get('limit') ? query.get('limit') : null;
    options["Prefix"]= query.get('folder') ? query.get('folder') : null;
    const objects = await s3.listObjects(options).promise();
    return {
      data:objects.Contents,
      error:null
    }
  }
  catch(err)
  {
    return {
      data:null,
      error:err
    }
  }
}

export const fetchById = async (req:NextRequest,params:any)=>{
  const {keys} = params;
  const path = keys.join('/');
  options["Key"] = path;
  try {
    await s3.headObject(options).promise();
    options.Expires = 60;
    const url = s3.getSignedUrl('getObject',options);
    return {
      message: "success",
      data: url,
      error:null
    }
  }
  catch(err)
  {
    return {
      data:null,
      message: "failed",
      error: err
    }
  }
}

export const create = async (req:NextRequest)=>{
  const data = await req.json();
  return {
    message: "Get request By Id !"
  }
}

export const update = (req:NextRequest)=>{
  const data = req.body;
  return {
    message: "Put request !",
    data
  };
}

export const trash = async (req:NextRequest,params:any)=>{
  const {keys} = params;
  const path = keys.join('/');
  options.Key = path;
  try {
    await s3.headObject(options).promise();
    await s3.deleteObject(options).promise();
    return {
      data: "success",
      error:null
    }
  }
  catch(err)
  {
    return {
      data: null,
      error:err
    }
  }
}
