"use strict";
exports.__esModule = true;
exports.profileSchema = void 0;
var mongoose_1 = require("mongoose");
exports.profileSchema = new mongoose_1.Schema({
    name: { require: true, type: String, unique: true },
    age: { require: true, type: Number, unique: true },
    gender: { require: true, type: String, unique: true },
    location: { require: true, type: String, unique: true },
    height: { require: true, type: Number, unique: true },
    weight: { require: true, type: Number, unique: true },
    kids: { require: true, type: String, unique: true },
    intrested: { require: true, type: String, unique: true },
    info: { require: true, type: String, unique: true }
});
var NewCard = mongoose_1["default"].model("newProfile", exports.profileSchema);
exports["default"] = NewCard;
