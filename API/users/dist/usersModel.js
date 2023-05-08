"use strict";
exports.__esModule = true;
exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
var profileModel_1 = require("../profileUser/profileModel");
var prefferanceModel_1 = require("../prefferanceUser/prefferanceModel");
exports.UserSchema = new mongoose_1.Schema({
    name: String,
    password: String || Number,
    email: String,
    profile: [profileModel_1.profileSchema],
    preffrences: [prefferanceModel_1.prefferanceSchema]
});
var UserModel = mongoose_1["default"].model("users", exports.UserSchema);
exports["default"] = UserModel;
