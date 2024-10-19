import express from 'express';

import validateRequest from "./process/util";
import imageProcess from './process/image'

const path = require('path');
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.status(200);
    res.json({
        message: "Hello!",
    });
});
app.get('/api/images', (req, res) => {
    // res.send(req);
    const filename = req.query.filename as string;
    const width = req.query.width as string;
    const height = req.query.height as string;
    //validate
    var validMessage = validateRequest(filename, width, height);
    if (validMessage) {
        res.status(400);
        res.send(validMessage)
    }
    //console.log(filename)
    var response = imageProcess(filename, width, height);
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
    console.log(`server started at localhost:${port}`)
});
export default app;