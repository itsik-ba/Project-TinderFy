"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersControlls_1 = require("./usersControlls");
router
    .get("/getusers", usersControlls_1.getAllUsers)
    .post("/register", usersControlls_1.addNewUser)
    .post("/login", usersControlls_1.userLogin)
    .patch("/updatauser", usersControlls_1.updataUser);
exports["default"] = router;
