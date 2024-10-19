"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateRequest(filename, width, height) {
    var message = null;
    if (!filename || !width || !height) {
        message = "Please fill full parameter!";
    }
    return message;
}
exports.default = validateRequest;
