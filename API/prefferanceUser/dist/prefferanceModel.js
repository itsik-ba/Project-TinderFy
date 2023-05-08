"use strict";
exports.__esModule = true;
exports.prefferanceSchema = void 0;
var mongoose_1 = require("mongoose");
exports.prefferanceSchema = new mongoose_1.Schema({
    fullname: String,
    age: Number,
    //   gender: {
    //     layout: 'checkbox'
    //   },
    country: String,
    height: Number,
    weight: Number,
    yourself: String
});
exports["default"] = exports.prefferanceSchema;
