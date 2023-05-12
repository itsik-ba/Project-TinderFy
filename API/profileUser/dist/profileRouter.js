"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var profileControls_1 = require("./profileControls");
router
    .post("/newProfile", profileControls_1.newProfile);
exports["default"] = router;
