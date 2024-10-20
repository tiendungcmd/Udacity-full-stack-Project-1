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
const image_1 = __importDefault(require('../process/image'))
describe('image process', () => {
  it('image not exist!', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const filename = 'cat123'
      const height = '200'
      const width = '200'
      const res = yield (0, image_1.default)(filename, height, width)
      expect(res).toBeNull()
    }))
  it('should return path output image', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const filename = 'cat'
      const height = '200'
      const width = '200'
      const res = yield (0, image_1.default)(filename, height, width)
      expect(res).toBeDefined()
    }))
})
