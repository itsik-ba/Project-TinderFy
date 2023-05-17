"use strict";
exports.__esModule = true;
exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: { require: [true, "user must enter"], type: String, unique: true },
    password: { require: true, type: String },
    email: { require: true, type: String, unique: true },
    role: { type: String, "enum": ["subscriber", "user"], "default": "user" },
    subscribed: { type: Boolean, "default": false, select: false }
});
var UserModel = mongoose_1["default"].model("users", exports.UserSchema);
exports["default"] = UserModel;
