import {Configuration, MathUtil} from "../src-oop/static"

describe('static', () => { 
    it('should support static', () => {
        console.info(Configuration.NAME)// langsung aja begini


        console.info(MathUtil.sum(20,30,50))
    });
    
 })