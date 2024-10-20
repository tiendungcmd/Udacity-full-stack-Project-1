import sharp from 'sharp'
import fs from 'fs'
import path from 'path'
const outPutPath = path.resolve('output')
async function imageProcess(
  filename: string,
  widthImage: string,
  heightImage: string,
) {
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
    const width = parseInt(widthImage as string, 10) || 300
    const height = parseInt(heightImage as string, 10) || 200

    await sharp(inputImagePath).resize(width, height).toFile(outImagePath)
    return outImagePath
  } else {
    return null
  }
}
export default imageProcess
