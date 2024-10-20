import express from 'express'
import routes from './routes/routes'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.status(200)
  res.json({
    message: 'Hello. Welcome my project!',
  })
})
app.use('/api', routes)
app.listen(port, () => {
  console.log(`server started at localhost:${port}`)
})
export default app
