"use strict";
exports.__esModule = true;
exports.profileSchema = void 0;
var mongoose_1 = require("mongoose");
exports.profileSchema = new mongoose_1.Schema({
    name: String,
    age: Number,
    gender: String,
    location: String,
    height: Number,
    weight: Number,
    kids: String || undefined,
    intrested: String,
    info: String
});
var NewCard = mongoose_1["default"].model("newProfile", exports.profileSchema);
exports["default"] = NewCard;
