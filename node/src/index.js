"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const runner_1 = __importDefault(require("./runner"));
const app = (0, express_1.default)();
app.use(function (req, _res, next) {
    console.log(`[${req.method}] ${req.path}`);
    next();
});
app.get("/index", function (_req, res) {
    (0, runner_1.default)();
    res.json({ ok: true });
});
app.listen(3001, function () {
    console.log("server running");
});
