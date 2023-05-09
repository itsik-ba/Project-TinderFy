"use strict";
exports.__esModule = true;
exports.profileSchema = void 0;
var mongoose_1 = require("mongoose");
exports.profileSchema = new mongoose_1.Schema({
    fullname: String,
    age: Number,
    gender: String,
    country: String,
    height: Number,
    weight: Number,
    yourself: String,
    textarea: String,
    intrested: String
});
exports["default"] = exports.profileSchema;
