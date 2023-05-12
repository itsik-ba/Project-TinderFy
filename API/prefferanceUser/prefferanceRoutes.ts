import express from "express";
const router = express.Router();

import{
    userPrefferance,


}from "./prefferanceControls";



router
.post("/prefferance", userPrefferance)


export default router;