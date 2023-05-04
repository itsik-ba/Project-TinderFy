import express from "express";
const app = express();
import mongoose, {Schema} from "mongoose";
import * as dotenv from "dotenv";
dotenv.config()
app.use(express.json())
import "./data/db";

app.use(express.static("./public"));

app.listen(3000, ()=>{
    console.log(`server listen at: 3000`)
})
