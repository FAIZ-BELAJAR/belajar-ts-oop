import {ValidationError, doubleIr} from "../src-oop/error_class"

describe('it should support', () => { 
    it('should_sopport', () => {
        try {
            const result = doubleIr(-3);
            console.info(result)
        } catch (error){
            if (error instanceof ValidationError){
                console.info(error.message);
            }
        }
    });
    
 })