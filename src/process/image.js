"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const fs = require('fs');
const path = require('path');
const outPut = path.resolve('output');
function imageProcess(filename, widthImage, heightImage) {
    const outPutFile = path.join(outPut, `${filename}-${widthImage}-${widthImage}.jpg`);
    const imagePath = path.join(__dirname, filename + '.jpg');
    if (fs.existsSync(imagePath)) {
        var width = parseInt(widthImage, 10) || 300;
        var height = parseInt(heightImage, 10) || 200;
        (0, sharp_1.default)(imagePath)
            .resize(width, height)
            .toFile(outPutFile);
        return outPutFile;
    }
    else {
        return null;
    }
}
exports.default = imageProcess;
