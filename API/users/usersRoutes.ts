import express from "express";
const router = express.Router();

import {
userLogin, 
addNewUser,
getAllUsers,
updateDetail,
// updataUser,


} from "./usersControlls";

router
.get("/getusers", getAllUsers)
.post("/register", addNewUser)
.post("/login", userLogin)
.put("/update", updateDetail)

export default router