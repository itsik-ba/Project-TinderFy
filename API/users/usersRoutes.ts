import express from "express";
const router = express.Router();

import {
userLogin, 
addNewUser,
newProfile,



} from "./usersControlls";

router
.post("/add-User", addNewUser)
.post("add-User/newProfile", newProfile)
// .get()
.post("/login", userLogin)








export default router