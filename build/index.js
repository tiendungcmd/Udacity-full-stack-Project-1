'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const express_1 = __importDefault(require('express'))
const routes_1 = __importDefault(require('./routes/routes'))
const path = require('path')
const app = (0, express_1.default)()
const port = 3000
app.get('/', (req, res) => {
  res.status(200)
  res.json({
    message: 'Hello. Welcome my project!',
  })
})
app.use('/api', routes_1.default)
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
exports.default = app
