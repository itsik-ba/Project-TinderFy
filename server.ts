import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config()
import cookieParser from 'cookie-parser';
app.use(express.json());
import "./data/db";
app.use(cookieParser());
app.use(express.static("./public/images"));


// routes
import usersRoutes from "./API/users/usersRoutes";
app.use("/api/users", usersRoutes);


import preffranceRoutes from "./API/prefferanceUser/prefferanceRoutes";
app.use("/api/prefferanceUser", preffranceRoutes)

app.use(express.static("./public"));

app.listen(3000, ()=>{
    console.log(`server listen at: 3000`)
})
