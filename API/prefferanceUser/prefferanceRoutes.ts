import express from "express";
const router = express.Router();

import{
    addNewuserPrefferance,
    getUserId


}from "./prefferanceControls";



router
.post("/addPrefferance", addNewuserPrefferance)
.get("/getId", getUserId)


export default router;