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
const express_1 = __importDefault(require('express'))
const image_1 = __importDefault(require('../../process/image'))
const image = express_1.default.Router()
image.get('/', (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const filename = req.query.filename
    const width = req.query.width
    const height = req.query.height
    if (!filename) {
      res.status(400)
      res.send('Please fill file name')
      return
    }
    if (!width) {
      res.status(400)
      res.send('Please fill width')
      return
    }
    if (isNaN(Number(width))) {
      res.status(400)
      res.send('Please fill correct type of width')
      return
    }
    if (!height) {
      res.status(400)
      res.send('Please fill height')
      return
    }
    if (isNaN(Number(height))) {
      res.status(400)
      res.send('Please fill correct type of height')
      return
    }
    var response = yield (0, image_1.default)(filename, width, height)
    if (response) {
      res.sendFile(response)
    } else {
      res.status(400)
      res.json({
        message: 'Image not exist!',
      })
    }
  }),
)
exports.default = image
