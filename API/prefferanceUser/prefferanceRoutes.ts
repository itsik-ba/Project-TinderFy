import express from "express";
const router = express.Router();

import{
    addNewuserPrefferance,
    prefferanceUserCard
}from "./prefferanceControls";



router
.post("/addPrefferance", addNewuserPrefferance)
.get("/get-user-prefferance", prefferanceUserCard)


export default router;