"use strict";
exports.__esModule = true;
exports.prefferanceSchema = void 0;
var mongoose_1 = require("mongoose");
exports.prefferanceSchema = new mongoose_1.Schema({
    height: String,
    bodyType: String,
    kids: String,
    smoking: String,
    hangout: String,
    education: String,
    job: String,
    relationship: String,
    politics: String,
    religious: String
});
var Prefferance = mongoose_1["default"].model("prefferance", exports.prefferanceSchema);
exports["default"] = Prefferance;
