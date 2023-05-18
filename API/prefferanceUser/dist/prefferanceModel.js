"use strict";
exports.__esModule = true;
exports.prefferanceSchema = void 0;
var mongoose_1 = require("mongoose");
exports.prefferanceSchema = new mongoose_1.Schema({
    userId: { require: true, type: String },
    heightMax: { require: true, type: Number },
    heightMin: { require: true, type: Number },
    ageMax: { require: true, type: Number },
    ageMin: { require: true, type: Number },
    bodyType: { require: true, type: String },
    gender: { require: true, type: String },
    kids: { require: true, type: String },
    smoking: { require: true, type: String },
    education: { require: true, type: String },
    job: { require: true, type: String },
    relationship: { require: true, type: String },
    religious: { require: true, type: String }
});
var Prefferance = mongoose_1["default"].model("prefferance", exports.prefferanceSchema);
exports["default"] = Prefferance;
