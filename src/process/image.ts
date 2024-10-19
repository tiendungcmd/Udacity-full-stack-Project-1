import express from 'express';
import sharp from 'sharp';
const fs = require('fs');
const path = require('path');
const outPut = path.resolve('output');
function imageProcess(filename: string, widthImage: string, heightImage: string) {
    const outPutFile = path.join(outPut, `${filename}-${widthImage}-${widthImage}.jpg`);
    const imagePath = path.join(__dirname, filename + '.jpg');
    if (fs.existsSync(imagePath)) {
        var width = parseInt(widthImage as string, 10) || 300;
        var height = parseInt(heightImage as string, 10) || 200;

        sharp(imagePath)
            .resize(width, height)
            .toFile(outPutFile);
        return outPutFile;
    } else {
        return null;
    }
}
export default imageProcess;