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
const index_1 = __importDefault(require('../index'))
const supertest_1 = __importDefault(require('supertest'))
describe('app should have routes', () => {
  it('app should return http code 200 on GET /', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const res = yield (0, supertest_1.default)(index_1.default).get('/')
      expect(res.status).toEqual(200)
    }))
  it('app should return http code 400 on GET /api/images', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const res = yield (0, supertest_1.default)(index_1.default).get(
        '/api/images',
      )
      expect(res.status).toEqual(400)
    }))
  it('app should return http code 404 on GET /api/image', () =>
    __awaiter(void 0, void 0, void 0, function* () {
      const res = yield (0, supertest_1.default)(index_1.default).get(
        '/api/image',
      )
      expect(res.status).toEqual(404)
    }))
})
