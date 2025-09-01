import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"
import router from "./routes.js";

dotenv.config()

mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("Database connected")
})

const app = express()
app.use(router)

const port = process.env.PORT

app.listen(port, ()=>{
  console.log(`Server running at http://localhost:${port}/`)
})


