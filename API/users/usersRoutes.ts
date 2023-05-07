import express from "express";
const router = express.Router();

import {
userLogin, 
addNewUser,




} from "./usersControlls";



router
.post("/add-User", addNewUser)
.post("/login", userLogin)








export default router