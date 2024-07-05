// require('dotenv').config({path: './env'})
import app from "./app.js"
import dotenv from "dotenv";
import connectDB from "./db/db.js";



dotenv.config({
    path: './env'
})


connectDB()
    .then(
        app.on("error", (error) => {
            console.log("ERROR:", error)
        }))
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running at port: ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB Connection Failed:", err)
    })



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
