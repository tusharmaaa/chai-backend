// require ('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDBfrom from "./db/INDEX.js/";
connectDB()

dotenv.config({
    path:'./env'
})


 

 
//  import  express  from "express";
// const app = express()

// (async () => {
// try {
//    await  mongoose.connect(`${process.env.
//     mongodburi}/${DB_NAME}`)
//    app.on("error",(error)=>{
//     console.log("ERRR:",error);  
//     throw error
//    })
//    app.listen(process.env.PORT,()=>{
//     console.log(`app is listening on port${process.nextTick.PORT}`);
//    })
// } catch (error) {
//     console.error("ERROR:",error)
//     throw err
// }

//  })()




