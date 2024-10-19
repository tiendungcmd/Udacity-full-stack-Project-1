"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const util_1 = __importDefault(require("./process/util"));
const image_1 = __importDefault(require("./process/image"));
const path = require('path');
const app = (0, express_1.default)();
const port = 3000;
app.get("/", (req, res) => {
    res.status(200);
    res.json({
        message: "Hello!",
    });
});
app.get('/api/images', (req, res) => {
    // res.send(req);
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    //validate
    var validMessage = (0, util_1.default)(filename, width, height);
    if (validMessage) {
        res.status(400);
        res.send(validMessage);
    }
    //console.log(filename)
    var response = (0, image_1.default)(filename, width, height);
    if (response) {
        res.sendFile(response);
    }
    else {
        res.json({
            message: "Error!",
        });
    }
});
app.listen(port, () => {
    console.log(`server started at localhost:${port}`);
});
exports.default = app;
