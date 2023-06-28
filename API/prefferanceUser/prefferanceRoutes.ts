import express from "express";
const router = express.Router();

import{
    addNewuserPrefferance,
}from "./prefferanceControls";



router
.post("/addPrefferance", addNewuserPrefferance)


export default router;