import express from "express";
const router = express.Router();

import {
userLogin, 
addNewUser,
getAllUsers,
updateDeTail,
// updataUser,


} from "./usersControlls";

router
.get("/getusers", getAllUsers)
.post("/register", addNewUser)
.post("/login", userLogin)
.put("/update", updateDeTail)

export default router