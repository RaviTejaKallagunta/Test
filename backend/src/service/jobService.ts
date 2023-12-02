import { companyModel } from "../model/companyModel"

export const jobPost=(id:string,job_description:string,skill_set:string,experience:number)=>{
    const job= new companyModel({id,job_description,skill_set,experience})
    return job.save()
}

export const getAllJobs=()=>{
    return companyModel.find()
}