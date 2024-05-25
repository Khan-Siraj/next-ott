import "@lib/modules/db.module";
import Plan from "@lib/schema/plan.schema";
import { NextRequest } from "next/server";

export const create = async (req: NextRequest) => {
    try {
        const data = await req.json();
        const plan = new Plan(data);
        const response = await plan.save();
        return { data: response, error: null }
    }
    catch (err) {
        return { data: null, error: err }
    }
}

export const fetch = async (req: NextRequest) => {
    try {
        const plan = await Plan.find();
        return { data: plan, error: null }
    }
    catch (err) {
        return { data: null, error: err }
    }
}

export const fetchById = async (req: NextRequest,params:any) => {
    const {id} = params;
    try {
      const plans = await Plan.findById(id);
      return {data:plans,error:null}
    }
    catch(err)
    {
      return {data:null,error:err}
    }
}

export const update = async (req:NextRequest,params:any)=>{
    const {id} = params;
    const data = await req.json();
    try {
      const updated = await Plan.findByIdAndUpdate(id,data,{new:true});
      return {data:updated,error:null}
    }
    catch(err)
    {
      return {data:null,error:err}
    }
}

export const trash = async (req:NextRequest,params:any)=>{
    const {id} = params;
    try {
      const deleted = await Plan.findByIdAndDelete(id);
      return {data:deleted,error:null}
    }
    catch(err)
    {
      return {data:null,error:err}
    }
  }