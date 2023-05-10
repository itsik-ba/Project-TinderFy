"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.newProfile = exports.userLogin = exports.addNewUser = void 0;
var usersModel_1 = require("./usersModel");
var profileModel_1 = require("../profileUser/profileModel");
var jwt = require("jwt-simple");
var secret = process.env.JWT_SECRET;
exports.addNewUser = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, password, userLogin_1, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, email = _a.email, password = _a.password;
                return [4 /*yield*/, usersModel_1["default"].create({
                        name: name, email: email, password: password
                    })];
            case 1:
                userLogin_1 = _b.sent();
                console.log(userLogin_1);
                res.status(201).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _b.sent();
                console.error(error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.userLogin = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, password, userLogin_2, token, error_2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, password = _a.password;
                return [4 /*yield*/, usersModel_1["default"].findOne({ name: name, password: password })];
            case 1:
                userLogin_2 = _b.sent();
                if (!userLogin_2)
                    throw new Error("user name or password is not Valid");
                if (!secret)
                    throw new Error("cant find jwt secret");
                token = jwt.encode(userLogin_2._id, secret);
                console.log(token);
                res.cookie("" + name, token, {
                    maxAge: 9000000, httpOnly: true
                });
                res.status(201).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_2 = _b.sent();
                console.error(error_2);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.newProfile = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, age, gender, location, height, weight, kids, intrested, info, userProfile, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                _a = req.body, name = _a.name, age = _a.age, gender = _a.gender, location = _a.location, height = _a.height, weight = _a.weight, kids = _a.kids, intrested = _a.intrested, info = _a.info;
                return [4 /*yield*/, profileModel_1["default"].create({
                        name: name, age: age, gender: gender, location: location, height: height, weight: weight, kids: kids, intrested: intrested, info: info
                    })];
            case 1:
                userProfile = _b.sent();
                console.log(userProfile);
                res.status(201).send({ ok: true });
                return [3 /*break*/, 3];
            case 2:
                error_3 = _b.sent();
                console.error(error_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
