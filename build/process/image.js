'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const sharp_1 = __importDefault(require('sharp'))
const fs = require('fs')
const path = require('path')
const outPutPath = path.resolve('output')
function imageProcess(filename, widthImage, heightImage) {
  return __awaiter(this, void 0, void 0, function* () {
    const outImagePath = path.join(
      outPutPath,
      `${filename}-${widthImage}-${widthImage}.jpg`,
    )
    const inputImagePath = path.join(__dirname, filename + '.jpg')
    //check image exist
    if (fs.existsSync(outImagePath)) {
      return outImagePath
    }
    if (fs.existsSync(inputImagePath)) {
      var width = parseInt(widthImage, 10) || 300
      var height = parseInt(heightImage, 10) || 200
      yield (0, sharp_1.default)(inputImagePath)
        .resize(width, height)
        .toFile(outImagePath)
      return outImagePath
    } else {
      return null
    }
  })
}
exports.default = imageProcess
