import express from "express";
const router = express.Router();

import {
userLogin, 
addNewUser,
getAllUsers,



} from "./usersControlls";

router
.get("/getusers", getAllUsers)
.post("/register", addNewUser)
.post("/login", userLogin)


export default router