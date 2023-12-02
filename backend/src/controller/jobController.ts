import { Request, Response } from "express";
import { getAllJobs, jobPost } from "../service/jobService";

export const newJob=async (request:Request,response:Response)=>{
    const {id,job_description,skill_set,experience}=request.body
    await jobPost(id,job_description,skill_set,experience)
    response.send('Job Posted Successfully')
}

export const findJobs=async (request:Request,response:Response)=>{
    const res=await getAllJobs()
    response.send(res)
}