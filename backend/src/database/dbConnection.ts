import mongoose from "mongoose";

const connection = ()=>{
        mongoose.connect('mongodb://127.0.0.1/TEST').then(
        ()=>{
            console.log("DataBase Connected Successfully")
        }
    )
}

export default connection