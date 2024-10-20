import imageProcess from '../process/image'
describe('image process', () => {
  it('image not exist!', async () => {
    const filename = 'cat123'
    const height = '200'
    const width = '200'
    const res = await imageProcess(filename, height, width)
    expect(res).toBeNull()
  })
  it('should return path output image', async () => {
    const filename = 'cat'
    const height = '200'
    const width = '200'
    const res = await imageProcess(filename, height, width)
    expect(res).toBeDefined()
  })
})
