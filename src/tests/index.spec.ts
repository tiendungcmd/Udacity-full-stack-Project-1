import app from '../index'
import request from 'supertest'

describe('app should have routes', () => {
  it('app should return http code 200 on GET /', async () => {
    const res = await request(app).get('/')
    expect(res.status).toEqual(200)
  })
  it('app should return http code 400 on GET /api/images', async () => {
    const res = await request(app).get('/api/images')
    expect(res.status).toEqual(400)
  })
  it('app should return http code 404 on GET /api/image', async () => {
    const res = await request(app).get('/api/image')
    expect(res.status).toEqual(404)
  })
})
