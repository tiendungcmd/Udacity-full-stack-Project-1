'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const image_api_1 = __importDefault(require('./api/image-api'))
const routes = express_1.default.Router()
routes.get('/', (req, res) => {
  res.status(200)
  res.send('api is working!')
})
routes.use('/images', image_api_1.default)
exports.default = routes
