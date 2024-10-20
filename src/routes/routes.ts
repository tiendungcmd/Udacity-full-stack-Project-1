import express from 'express'
import image from './api/image-api'
const routes = express.Router()
routes.get('/', (req, res) => {
  res.status(200)
  res.send('api is working!')
})
routes.use('/images', image)
export default routes
