import express from "express";
const router = express.Router();

import {
userLogin, 
addNewUser,
renderHome,


} from "./usersControlls";

router
.get("/", renderHome)
.post("/add-User", addNewUser)
.post("/login", userLogin)


export default router