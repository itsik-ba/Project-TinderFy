"use strict";
exports.__esModule = true;
exports.prefferanceSchema = void 0;
var mongoose_1 = require("mongoose");
exports.prefferanceSchema = new mongoose_1.Schema({
    height: { require: true, type: String, unique: true },
    bodyType: { require: true, type: String, unique: true },
    kids: { require: true, type: String, unique: true },
    smoking: { require: true, type: String, unique: true },
    hangout: { require: true, type: String, unique: true },
    education: { require: true, type: String, unique: true },
    job: { require: true, type: String, unique: true },
    relationship: { require: true, type: String, unique: true },
    politics: { require: true, type: String, unique: true },
    religious: { require: true, type: String, unique: true }
});
var Prefferance = mongoose_1["default"].model("prefferance", exports.prefferanceSchema);
exports["default"] = Prefferance;
