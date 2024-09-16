import mongoose from "mongoose";
export const dbConnection=()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"HOSPITAL",
    })
    .then(()=>{
        console.log("connnected to database");
    })
    .catch((err)=>{
        console.log(`somem error occured while connecting to database :${err}`)
    })
}