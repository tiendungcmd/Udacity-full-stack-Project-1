import imageProcess from '../process/image';
import validateRequest from '../process/util';

describe('validate request', ()=>{
    it('request is correct format',async ()=>{
        const filename = 'cat';
        const height = '200';
        const width = '200';
        const res =  validateRequest(filename,height,width);
        expect(res).toBeNull()
    });
    it('request is incorrect format',async ()=>{
        const filename = 'cat';
        const height = 'ac';
        const width = 'asc';
        const res =  validateRequest(filename,height,width);
        expect(res).toBeDefined()
    });
});
describe('image process', ()=>{
    it('image not exist!',async ()=>{
        const filename = 'cat123';
        const height = '200';
        const width = '200';
        const res =  imageProcess(filename,height,width);
        expect(res).toBeNull()
    });
    it('should return path output image',async ()=>{
        const filename = 'cat';
        const height = '200';
        const width = '200';
        const res =  validateRequest(filename,height,width);
        expect(res).toBeDefined()
    });
});
