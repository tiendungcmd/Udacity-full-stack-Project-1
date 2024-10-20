import express from 'express'
import imageProcess from '../../process/image'
const image = express.Router()
image.get('/', async (req: express.Request, res: express.Response) => {
  const filename = req.query.filename as string
  const width = req.query.width as string
  const height = req.query.height as string
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
  const response = await imageProcess(filename, width, height)
  if (response) {
    res.sendFile(response)
  } else {
    res.status(400)
    res.json({
      message: 'Image not exist!',
    })
  }
})
export default image
