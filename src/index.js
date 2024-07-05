// require('dotenv').config({path: './env'})

import dotenv from "dotenv";
import connectDB from "./db/db.js";



dotenv.config({
    path: './env'
})


connectDB()



/*
import express from "express"
const app = express()

// IIFE (Immediately Invoked Function Expression)
( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error) => {
            console.log("ERROR:", error);
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on ${process.env.PORT}`);
         } )
    } catch (error) {
        console.log("ERROR:", error)
        throw error
    }
})()
*/ 
