import express from "express";
const router = express.Router();

import {
newProfile,

}from "./profileControls"; 



router
.post("/newProfile", newProfile)


export default router;