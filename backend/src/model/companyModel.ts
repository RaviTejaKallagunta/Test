import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
    {
        id:{
            type:String,
            required:true
        },
        job_description:{
            type:String,
            required:true
        },
        skill_set:{
            type:String,
            required:true
        },
        experience:{
            type:Number,
            required:true
        }
    }
)

export const companyModel=mongoose.model('Job Post',companySchema)