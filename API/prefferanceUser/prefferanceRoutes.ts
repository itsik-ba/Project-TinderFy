import express from "express";
const router = express.Router();

import{
    addNewuserPrefferance,


}from "./prefferanceControls";



router
.post("/prefferance", addNewuserPrefferance)


export default router;