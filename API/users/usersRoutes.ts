import express from "express";
const router = express.Router();

import {
userLogin, 
// getUser,



} from "./usersControlls";



router
.post("/login", userLogin)
// .get()






export default router