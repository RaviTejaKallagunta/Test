import axios from "axios";
import { job } from "../types/jobType";

export const postJob=async (job:job)=>{
    return await axios.post('http://localhost:8888/admin',job)
}

export const getAllJobs=async ()=>{
    const res= await axios.get('http://localhost:8888/search')
    return res.data
}