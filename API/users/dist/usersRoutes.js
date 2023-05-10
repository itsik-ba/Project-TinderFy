"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var usersControlls_1 = require("./usersControlls");
router
    .post("/add-User", usersControlls_1.addNewUser)
    .post("add-User/newProfile", usersControlls_1.newProfile)
    .post("/login", usersControlls_1.userLogin);
exports["default"] = router;
